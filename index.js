const express = require("express");
const app = express();
const data = require("./data.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("HELLO WORLD");
});
app.get("/user1", (req, res) => {
  res.status(200).json(data.user1);
});
app.get("/user2", (req, res) => {
  res.status(200).json(data.user2);
});

app.post("/addUser", (req, res) => {
  console.log(req.body);
  res.status(200).json(req.body);
});

app.listen(3000, () => {
  console.log("Server is running on port ->>>>> 3000");
});
