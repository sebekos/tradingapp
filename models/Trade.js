const mongoose = require("mongoose");

const TradeSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    side: {
        type: Number,
        required: true
    },
    shares: {
        type: Number,
        required: true
    },
    entry_price: {
        type: Number,
        required: true
    },
    exit_price: {
        type: Number
    },
    entry_date: {
        type: Date,
        default: Date.now
    },
    exit_date: {
        type: Date
    }
});

module.exports = Trade = mongoose.model("trade", TradeSchema);
