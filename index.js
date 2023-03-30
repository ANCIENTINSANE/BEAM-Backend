var bodyParser = require("body-parser");

const express = require("express");

const app = express();

const {
  getToDo,
  getToDoOne,
  postToDo,
} = require("./db/services/todoFunctions");

const { getUser, generateToken } = require("./db/services/user");
require("dotenv").config();

app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.send("BEAM-BACKEND");
});

app.get("/gettodoone", async (req, res) => {
  const r = await getToDoOne();
  res.json(r);
});

app.get("/gettodo", async (req, res) => {
  const r = await getToDo();
  res.json(r);
});

app.post("/login", async (req, res) => {
  const userpass = req.body.password;
  const userid = await req.body.userid;
  console.log(userid);
  const r = await getUser(userid);
  console.log(r.length);
  if (r.length == 0) {
    res.json({ status: false, message: "No User" });
  } else {
    var dbpasss = r[0].password;
    if (userpass == dbpasss) {
      var tokenData = { _id: r[0]._id, userid: r[0].userid };
      const token = await generateToken(tokenData, "IDGAF", "1h");
      res.json({ status: true, token: token });
    }
    if (userpass != dbpasss) {
      res.json({ status: false, message: "Wrong Password" });
    }
  }
});

app.post("/posttodo", async (req, res) => {
  const r = await postToDo(JSON.stringify(req.body));
  res.send(r);
});

if (process.env.ENV === "dev") {
  app.listen(10000, () => {
    console.log("http://localhost:10000");
  });
}
module.exports = app;
