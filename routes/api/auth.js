const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
require("dotenv").config();

// @route       GET api/auth
// @description Get user
// @access      Public
router.get("/", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (err) {
        res.status(500).send("Server Error");
    }
});

// @route       POST api/auth
// @description Authenticate user and get token
// @access      Public
router.post(
    "/",
    [
        check("email", "Email is required or format is incorrect").isEmail(),
        check(
            "password",
            "Please enter a password with 6 or more characters"
        ).exists()
    ],
    async (req, res) => {
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (!user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: "Invalid credentials" }] });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: "Invalid credentials" }] });
            }
            const payload = {
                user: {
                    id: user.id,
                    access: user.access
                }
            };

            jwt.sign(
                payload,
                process.env.jwtSecret,
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            res.status(500).send("Server Error");
        }
    }
);

module.exports = router;
