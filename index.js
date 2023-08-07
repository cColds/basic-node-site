const http = require("http");
const fs = require("fs");

const host = "localhost";
const port = 8080;

const pages = ["/", "/about", "/contact-me"];

const server = http.createServer(function (req, res) {
  const isValidPage = pages.includes(req.url);
  const status = isValidPage ? 200 : 404;
  let page = isValidPage ? req.url : "/404";
  if (req.url === "/") page = "/index";

  res.writeHead(status, { "Content-Type": "text/html" });
  fs.readFile(`.${page}.html`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});
