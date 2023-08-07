const http = require("http");
const fs = require("fs");

const host = "localhost";
const port = 8080;

const server = http.createServer(function (req, res) {
  switch (req.url) {
    case "/": {
      res.writeHead(200, { "Content-Type": "text/html" });

      fs.readFile("./index.html", "utf8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.end(data);
      });
      break;
    }
    case "/about": {
      res.writeHead(200, { "Content-Type": "text/html" });

      fs.readFile("./about.html", "utf8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.end(data);
      });
      break;
    }

    case "/contact": {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile("./contact.html", "utf8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.end(data);
      });
      break;
    }

    default: {
      res.writeHead(404, { "Content-Type": "text/html" });
      fs.readFile("./404.html", "utf8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.end(data);
      });
    }
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
