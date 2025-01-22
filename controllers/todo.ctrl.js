const Todo = require("../models/todo.model");
const asyncHandler = require("express-async-handler");

const todoCtrl = {

  // Get all todos
  getTodos: asyncHandler(async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
  }),

  // Add a new todo
  addTodo: asyncHandler(async (req, res) => {
    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  })
}

module.exports = todoCtrl;
