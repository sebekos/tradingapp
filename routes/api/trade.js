const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../middleware/auth");
const Trade = require("../../models/Trade");

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

module.exports = router;
