const express = require("express");
const todoCtrl = require("../controllers/todo.ctrl");

const router = express.Router();

router.get("/", todoCtrl.getTodos);
router.post("/", todoCtrl.addTodo);

module.exports = router;