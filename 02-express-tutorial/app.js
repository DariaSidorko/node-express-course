
const express = require('express');

const cookieParser = require('cookie-parser');
const { products, people } = require("./data");
const peopleRouter = require('./routes/people');

// Initialize express app
const app = express();

// Middleware to serve static files from the 'public' directory
app.use(express.static("public"));

// Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use peopleRouter for /api/v1/people
app.use('/api/v1/people', peopleRouter);

// Middleware to parse cookies
app.use(cookieParser());

// Authentication middleware
const auth = (req, res, next) => {
    const user = req.cookies.name;
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ success: false, message: 'unauthorized' });
    }
  };

    // Custom middleware to log timestamp
 const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} ${new Date().toISOString()}`);
    next();
  };

  // POST /logon
  app.post('/logon', logger, (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ success: false, message: 'Please provide a name' });
    }
    res.cookie('name', name);
    res.status(201).json({ success: true, message: `Hello, ${name}` });
  });

// DELETE /logoff
  app.delete('/logoff', logger, (req, res) => {
    res.clearCookie('name');
    res.status(200).json({ success: true, message: 'Logged off' });
  });
  
  // GET /test
  app.get('/test', auth, logger, (req, res) => {
    res.status(200).json({ success: true, message: `Welcome back, ${req.user}` });
  });
  

 // Set the port to 3000 and start listening for connections
  const PORT = 3000;
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });
  



