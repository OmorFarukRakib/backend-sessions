const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ["active", "completed"],
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = todoSchema;