const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
require("dotenv").config();

const User = require("../../models/User");

// @route       POST api/user
// @description Register user
// @access      Public
router.post(
    "/",
    [
        check("name", "Name is required")
            .not()
            .isEmpty(),
        check("email", "Password is required").isEmail(),
        check("password", "Please enter a password with 6 or more characters").isLength({ min: 6 }),
        check("registerkey", "Key is required")
            .not()
            .isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        if (req.body.registerkey !== process.env.REGISTER_KEY) {
            return res.status(400).json({
                errors: [
                    {
                        msg: "Please contact admin to get a registration key"
                    }
                ]
            });
        }

        const { name, email, password } = req.body;

        try {
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ errors: [{ msg: "User already exists" }] });
            }
            user = new User({
                name,
                email,
                password
            });
            // Encrypt password
            const salt = await bcrypt.genSalt(10);
            // Hash password
            user.password = await bcrypt.hash(password, salt);
            // Save user
            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(payload, process.env.jwtSecret, { expiresIn: 360000 }, (err, token) => {
                if (err) throw err;
                res.json({ token });
            });
        } catch (err) {
            res.status(500).send("Server Error");
        }
    }
);

module.exports = router;
