const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();
const db = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
