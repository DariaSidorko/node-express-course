console.log('Express Tutorial')

const express = require('express');

const app = express();

app.use(express.static("public"));

const { products } = require("./data");

// GET:  '/'
app.get('/', (req, res) => {
    res.json({ message: "It worked!" });
});

// GET: "/api/v1/products"
app.get("/api/v1/products", (req, res) => {
    res.json(products);
});

// GET: "/api/v1/products/:productID"
app.get("/api/v1/products/:productID", (req, res) => {
    const idToFind = parseInt(req.params.productID);

    // If productID is not a valid number, return 404
    if (isNaN(idToFind)) {
        return res.status(404).json({ message: "That product was not found." });
    }

    const product = products.find((p) => p.id === idToFind);

    if (!product) {
        return res.status(404).json({ message: "That product was not found." });
    }

    res.json(product);
});

// GET: "/api/v1/query"
app.get("/api/v1/query", (req, res) => {
    let filteredProducts = [...products];

    // Search by custom parameter provided
        if (req.query.search) {
        const searchParam = req.query.search.toLowerCase();
        filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().startsWith(searchParam)
        );
    }

    // Filter by price if provided
    if (req.query.price) {
        const maxPrice = parseFloat(req.query.price);
        if (!isNaN(maxPrice)) {
            filteredProducts = filteredProducts.filter((product) => product.price < maxPrice);
        }
    }

    // Limit number of result to show
    if (req.query.limit) {
        const limit = parseInt(req.query.limit);
        if (!isNaN(limit) && limit > 0) {
            filteredProducts = filteredProducts.slice(0, limit);
        }
    }

    // If no results, return a message instead of an empty array
    if (filteredProducts.length === 0) {
        return res.status(404).json({ message: "No products found matching your criteria." });
    }

    res.json(filteredProducts);
});


// POST: '/submit'
app.post('/submit', (req, res) => {
    res.send('Form Submitted');
});


// Page Not Found
app.all('*', (req, res) => {
    res.status(404).send('Page not found');
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
