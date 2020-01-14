const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../middleware/auth");
const Trade = require("../../models/Trade");

// @route       GET api/trade/user
// @description Get user trades
// @access      private
router.get("/user", auth, async (req, res) => {
    try {
        const trades = await Trade.aggregate([
        {
            $match: {
            user: `${req.user.id}`
            }
        }
        ]).sort({ listdate: -1 });
        res.json(trades);
    } catch (err) {
        res.status(500).send("Server Error");
    }
    });

// @route       POST api/trade
// @description Create trade
// @access      Private
router.post(
    "/",
    [
        auth,
        [
            check("symbol", "Symbol is required")
                .not()
                .isEmpty(),
            check("side", "Side is required")
                .not()
                .isEmpty(),
            check("shares", "Shares is required")
                .not()
                .isEmpty(),
            check("entry_price", "Entry price is required")
                .not()
                .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { symbol, side, shares, entry_price } = req.body;

        // Build listing object
        const tradeFields = {};
        tradeFields.user = req.user.id;
        if (symbol) tradeFields.symbol = symbol;
        if (side) tradeFields.side = side;
        if (shares) tradeFields.shares = shares;
        if (entry_price) tradeFields.entry_price = entry_price;

        try {
            trade = new Trade(tradeFields);
            await trade.save();
            res.json(trade);
        } catch (err) {
            res.status(500).json({ errors: [{ msg: "Server Error" }] });
        }
    }
);

// @route       POST api/trade/close
// @description Close trade
// @access      Private
router.post(
    "/close",
    [
        auth,
        [
            check("id", "ID is required")
                .not()
                .isEmpty(),
            check("exit_price", "Exit price is required")
                .not()
                .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const userid = req.user.id;
        const tradeid = req.body.id;
        const exit_price = req.body.exit_price
        // Find trade by ID
        try {
            let trade = await Trade.findById(tradeid);
            if(trade && userid !== trade.user){
                return res.status(401).json({ msg: "User not authorized" });
            }
            if(trade) {
                trade = await Trade.findOneAndUpdate(
                    { _id: tradeid },
                    { 
                        $set: {
                            exit_price: exit_price
                        }
                    },
                    { new: true }
                );
                return res.json(trade);
            }
        } catch (err) {
            res.status(500).send("Server Error");
        }
    }
);

module.exports = router;
