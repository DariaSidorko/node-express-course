

// const http = require('http')

// const server = http.createServer((req, res) => {
//   //   if (req.url === '/') {
//   //     res.end('Welcome to our home page')
//   //   }
//   //   if (req.url === '/about') {
//   //     res.end('Here is our short history')
//   //   }
//   //   res.end(`
//   //   <h1>Oops!</h1>
//   // <p>We can't seem to find the page you are looking for</p>
//   // <a href="/">back home</a>
//   //   `)
//   // ###################################
//   // ###################################
//   //
//   //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
//   // SWITCH TO IF, ELSE IF, ELSE (BELOW)
//   // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
//   if (req.url === '/') {
//     res.end('Welcome to our home page')
//   } else if (req.url === '/about') {
//     res.end('Here is our short history')
//   } else {
//     res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `)
//   }
// })

// server.listen(5000)



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