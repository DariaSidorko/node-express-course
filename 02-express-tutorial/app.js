

const express = require('express');
const app = express();

// Middleware to serve static files from the 'public' directory
app.use(express.static("./public"));

// Middleware to parse JSON bodies
app.use(express.json());

const { products } = require("./data");


// API endpoint that returns JSON
app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
  });

// API endpoint that returns products JSON
app.get('/api/v1/products', (req, res) => {
    res.json(products);
  });

// API endpoint that returns product JSON by ID
app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID); 
    const product = products.find((p) => p.id === idToFind);
    if (product)
    res.json(product);
    else
    res.json({ message: "Product Not Found!" });
  });

// API endpoint that returns products JSON with Query
app.get('/api/v1/query', (req, res) => {
    const { search, limit, maxPrice } = req.query;

     // Filter products based on search query
     let result = products;
     if (search) {
         result = result.filter(product =>
             product.name.toLowerCase().startsWith(search.toLowerCase())
         );
     }

    // Limit the number of results to "limit"
    let limitNum = Number(limit);
    if (limit && !isNaN(limitNum)) {
        result  = result .slice(0, limitNum);
    }

    // Filter products by maximum price
    if (maxPrice) {
        const maxPriceNumber = parseFloat(maxPrice);
        if (!isNaN(maxPriceNumber)) {
            result = result.filter(product =>
                product.price <= maxPriceNumber
            );
        }
    }

    res.json(result);
});
  

  // Middleware for handling 404 errors
app.use((req, res, next) => {
    res.status(404).send("Not Found");
  });
  
  // Set the port to 3000 and start listening for connections
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});