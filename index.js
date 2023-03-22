const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/hy", (req, res) => {
  res.send("hello world 2");
});

if (process.env.ENV === "dev") {
  app.listen(10000, () => {
    console.log("http://localhost:10000");
  });
}
module.exports = app;
