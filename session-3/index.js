const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./routerHandler/todoHandler.js");
const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/newdb", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/todo", todoHandler);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
