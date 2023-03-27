const { dbConnect, client } = require("../db-mongo");

async function getToDo() {
  await dbConnect();
  try {
    const db = client.db("User");
    const todo = db
      .collection("todo")
      .find({})
      .toArray(() => {
        if (err) throw err;
        console.log(result);
        client.close();
      });
    return todo;
    // console.log(todo);
  } catch (err) {
    console.error(err);
  }
}

async function getToDoOne() {
  await dbConnect();
  try {
    const db = client.db("User");
    const todo = db.collection("todo").findOne();
    return todo;
    // console.log(todo);
  } catch (err) {
    console.error(err);
  }
}

async function postToDo(myobj) {
  await dbConnect();
  try {
    const db = client.db("User");
    myobj = JSON.parse(myobj);
    return db.collection("todo").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });

    // console.log(todo);
  } catch (err) {
    console.error(err);
  }
}

module.exports = { getToDo, getToDoOne, postToDo };
