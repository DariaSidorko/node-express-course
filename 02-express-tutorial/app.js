

const express = require('express');
const data = require('./data');
const peopleRouter = require('./routes/people');
const cookieParser = require('cookie-parser');

// Initialize express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());

// Use peopleRouter for /api/v1/people
app.use('/api/v1/people', peopleRouter);

// Middleware to serve static files from the 'public' directory
// app.use(express.static("./public"));

// Authentication middleware
const auth = (req, res, next) => {
    if (req.cookies.name) {
        req.user = req.cookies.name; // Set user information from cookie
        next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
};

// POST /logon
app.post('/logon', (req, res) => {
    const { name } = req.body;

    if (name) {
        res.cookie('name', name); // Set cookie with name
        res.status(201).json({ message: `Hello ${name}` });
    } else {
        res.status(400).json({ message: "Please provide a name" });
    }
});

// DELETE /logoff
app.delete('/logoff', (req, res) => {
    res.clearCookie('name');
    res.status(200).json({ message: "User logged off" });
});

// GET /test
app.get('/test', auth, (req, res) => {
    res.status(200).json({ message: `Welcome ${req.user}` });
});

  
  // Set the port to 3000 and start listening for connections
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});