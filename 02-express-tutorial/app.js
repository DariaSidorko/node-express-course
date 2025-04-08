console.log('Express Tutorial')

const express = require('express');

const { products, people } = require("./data");
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const peopleRouter = require('./routes/people');
app.use('/api/v1/people', peopleRouter);



app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// console.log("req.body")

const auth = (req, res, next) => {
    const user = req.cookies.name;
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ success: false, message: 'unauthorized' });
    }
  };

//   console.log("req.body")

  app.post('/logon', (req, res) => {
    console.log("Logon", req)
    const { name } = req.body;
    
    if (!name) {
      return res.status(400).json({ success: false, message: 'Please provide a name' });
    }
    
    res.cookie('name', name);
    res.status(201).json({ success: true, message: `Hello, ${name}` });
  });



  app.delete('/logoff', (req, res) => {
    res.clearCookie('name');
    res.status(200).json({ success: true, message: 'Logged off' });
  });
  
  app.get('/test', auth, (req, res) => {
    res.status(200).json({ success: true, message: `Welcome back, ${req.user}` });
  });
  


const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} ${new Date().toISOString()}`);
    next();
  };

  app.use(logger);

  
//   app.get('/api/v1/people', (req, res) => {
//     res.status(200).json({ success: true, data: people });
//   });
  
//   app.post('/api/v1/people', (req, res) => {
//     const { name } = req.body;
//     if (!name) {
//       return res.status(400).json({ success: false, message: 'Please provide a name' });
//     }
//     people.push({ id: people.length + 1, name });
//     res.status(201).json({ success: true, name });
//   });
  

// // GET:  '/'
// app.get('/', (req, res) => {
//     res.json({ message: "It worked!" });
// });

// // GET: "/api/v1/products"
// app.get("/api/v1/products", (req, res) => {
//     res.json(products);
// });

// // GET: "/api/v1/products/:productID"
// app.get("/api/v1/products/:productID", (req, res) => {
//     const idToFind = parseInt(req.params.productID);

//     // If productID is not a valid number, return 404
//     if (isNaN(idToFind)) {
//         return res.status(404).json({ message: "That product was not found." });
//     }

//     const product = products.find((p) => p.id === idToFind);

//     if (!product) {
//         return res.status(404).json({ message: "That product was not found." });
//     }

//     res.json(product);
// });

// // GET: "/api/v1/query"
// app.get("/api/v1/query", (req, res) => {
//     let filteredProducts = [...products];

//     // Search by custom parameter provided
//         if (req.query.search) {
//         const searchParam = req.query.search.toLowerCase();
//         filteredProducts = filteredProducts.filter((product) =>
//             product.name.toLowerCase().startsWith(searchParam)
//         );
//     }

//     // Filter by price if provided
//     if (req.query.price) {
//         const maxPrice = parseFloat(req.query.price);
//         if (!isNaN(maxPrice)) {
//             filteredProducts = filteredProducts.filter((product) => product.price < maxPrice);
//         }
//     }

//     // Limit number of result to show
//     if (req.query.limit) {
//         const limit = parseInt(req.query.limit);
//         if (!isNaN(limit) && limit > 0) {
//             filteredProducts = filteredProducts.slice(0, limit);
//         }
//     }

//     // If no results, return a message instead of an empty array
//     if (filteredProducts.length === 0) {
//         return res.status(404).json({ message: "No products found matching your criteria." });
//     }

//     res.json(filteredProducts);
// });


// // POST: '/submit'
// app.post('/submit', (req, res) => {
//     res.send('Form Submitted');
// });


// // Page Not Found
// app.all('*', (req, res) => {
//     res.status(404).send('Page not found');
// });


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
