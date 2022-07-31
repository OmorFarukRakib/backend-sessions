const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = new mongoose.model("User", require("../schemas/userSchema"));

// Registration
router.post("/", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const modifiedUser = new User({
    fullname: req.body.fullname,
    username: req.body.username,
    password: hashedPassword,
  })
  try {
    await modifiedUser.save();
    res.send(modifiedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});


// Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            res.status(404).send("User not found");
        } else {
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (isMatch) {
                res.send(user);
            } else {
                res.status(401).send("Password is incorrect");
            }
        }
    } catch (err) {
        res.status(400).send(err);
    }
}
);



module.exports = router;
