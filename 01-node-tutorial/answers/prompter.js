const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};


let targetNumber = Math.floor(Math.random() * 100) + 1;
let message = "Guess a number between 1 and 100:";

const form = () => `
  <body>
    <p>${message}</p>
    <form method="POST">
      <input type="number" name="guess" />
      <button type="submit">Submit</button>
    </form>
  </body>
`;

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    getBody(req, (body) => {
      const guess = Number(body["guess"]);
      if (!isNaN(guess)) {
        if (guess < targetNumber) {
          message = `${guess} is too low! Try again.`;
        } else if (guess > targetNumber) {
          message = `${guess} is too high! Try again.`;
        } else {
          message = `Congratulations! ${guess} is correct! A new game has started.`;
          targetNumber = Math.floor(Math.random() * 100) + 1;
        }
      } else {
        message = "Please enter a valid number.";
      }
      res.writeHead(303, { Location: "/" });
      res.end();
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(form());
  }
});


server.on("request", (req) => {  
  console.log("event received: ", req.method, req.url);  
});  

server.listen(3000);
console.log("Server is listening on port 3000");
