const express = require("express");
const app = express();
require("dotenv").config();
module.exports = app;
if (process.env.ENV === "dev") {
  app.listen(10000, () => {
    console.log("http://localhost:10000");
  });
}
app.get("/hy", (res, req) => {
  res.send("hello");
});
