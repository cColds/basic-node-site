const http = require("http");

const host = "localhost";
const port = 8080;

const server = http.createServer(function (req, res) {
  switch (req.url) {
    case "/": {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("Home");
      break;
    }
    case "/about": {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("About");
      break;
    }

    case "/contact": {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("Contact");
      break;
    }

    default: {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("404 Not Found");
    }
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
