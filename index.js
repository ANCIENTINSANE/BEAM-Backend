const express = require("express");
const { dbConnect } = require("./db/db-mongo");
const app = express();
const { getToDo } = require("./db/services/functions");
require("dotenv").config();

app.get("/", async (req, res) => {
  await dbConnect();
  res.send("hello");
});

app.get("/hy", async (req, res) => {
  // await dbConnect();
  const r = await getToDo();
  // res.send("hello world hy route");
  console.log(r);
  res.json(r);
});

if (process.env.ENV === "dev") {
  app.listen(10000, () => {
    console.log("http://localhost:10000");
  });
}
module.exports = app;
