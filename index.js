const { json } = require("express");
var bodyParser = require("body-parser");
const express = require("express");
const { dbConnect } = require("./db/db-mongo");
const app = express();
const { getToDo, getToDoOne, postToDo } = require("./db/services/functions");
require("dotenv").config();
app.use(bodyParser.json());
app.get("/gettodoone", async (req, res) => {
  const r = await getToDoOne();
  // res.send("hello world hy route");
  console.log(r);
  res.json(r);
});

app.get("/gettodo", async (req, res) => {
  // await dbConnect();
  const r = await getToDo();
  // res.send("hello world hy route");
  console.log(typeof r);
  res.json(r);
});

app.post("/posttodo", async (req, res) => {
  // await dbConnect();

  const r = await postToDo(JSON.stringify(req.body));
  // res.send("hello world hy route");
  console.log(req);
  // const r = req.body;
  console.log(r);
  res.send(r);
});

if (process.env.ENV === "dev") {
  app.listen(10000, () => {
    console.log("http://localhost:10000");
  });
}
module.exports = app;
