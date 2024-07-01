


const http = require('http');

// Create a simple web server
const server = http.createServer((req, res) => {

  // Handle different routes based on request URL
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.end('Welcome to the homepage!');
      break;
    case '/about':
      res.statusCode = 200;
      res.end('Welcome to the about page!');
      break;
    case '/contact':
      res.statusCode = 200;
      res.end('Welcome to the contact page!');
      break;
    default:
      res.statusCode = 404;
      res.end('404 Not Found');
  }
});


// Start the server and listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running and listening on http://localhost:${port}`);
});