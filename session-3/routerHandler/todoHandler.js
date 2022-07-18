const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Todo = new mongoose.model("Todo", require("../schemas/todoSchema"));

router.post("/", async (req, res) => {
  const todo = new Todo(req.body);
  try {
    await todo.save();
    res.send(todo);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/", (req, res) => {
  res.send("TO DO HANDLER");
});

module.exports = router;
