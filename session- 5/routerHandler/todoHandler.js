const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Todo = new mongoose.model("Todo", require("../schemas/todoSchema"));

// Save 1 todo data
router.post("/", async (req, res) => {
  const todo = new Todo(req.body);
  try {
    await todo.save();
    res.send(todo);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all todo data
router.get("/", async (req, res) => {
  console.log(req.query.status);
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get 1 todo data
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const todo = await Todo.findById(req.params.id);
    res.send(todo);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update 1 todo data
router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.json(todo);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete 1 todo data
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.json(todo);
  } catch (err) {
    res.status(400).send(err);
  }
});

// post multiple todo data
router.post("/many", async (req, res) => {
  const todos = req.body;
  console.log(todos);
  try {
    const savedTodos = await Todo.insertMany(todos);
    res.send(savedTodos);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/", (req, res) => {
  res.send("TO DO HANDLER");
});

module.exports = router;
