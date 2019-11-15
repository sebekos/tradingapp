const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const dotenv = require("dotenv");
require("dotenv").config();

// Init express
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/user", require("./routes/api/user"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
    //Set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

// Setup port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
