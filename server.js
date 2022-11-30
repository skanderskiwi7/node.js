const fs = require("fs");

// const http = require("http");

// const server = http.createServer(function (req, res) {
//   res.write("<h1>Hello Node</h1>");
//   res.end();
// });
// server.listen(4000, (err) => {
//   err ? console.log(err) : console.log("sucess");
// });
// fs.writeFile("welcome.txt", "Hello Node", (err) => {
//   err ? console.log(err) : console.log("hello.txt");
// });
fs.readFile("welcome.txt", (err, server) => {
  err ? console.log(err) : console.log(server.toString());
});
