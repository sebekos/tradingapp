const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    access: {
        type: String,
        default: 1
    },
    balance: {
        type: Number,
        default: 1000
    },
    trades: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("user", UserSchema);
