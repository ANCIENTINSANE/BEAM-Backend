const { dbConnect, client } = require("../db-mongo");

async function getToDo() {
  await dbConnect();
  try {
    const db = client.db("User");
    const todo = await db.collection("todo").findOne();
    return todo;
    // console.log(todo);
  } catch (err) {
    console.error(err);
  }
}

module.exports = { getToDo };
