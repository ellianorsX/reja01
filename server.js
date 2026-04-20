console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1 enterance codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 sections codes

// 3 views codes
app.set("views", "views");
app.set("view engine", "ejs");

// 4 routing codes
app.get("/hello", function (req, res) {
  res.end("HELLO WORLD by Ellianor");
});

app.get("/gift", function (req, res) {
  res.end("This gift for you by Ellianor");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
