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

module.exports = { getToDo, getToDoOne };
