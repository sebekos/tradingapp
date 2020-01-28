import { TRADE_SUCCESS, CLOSE_TRADE, TRADE_FAILURE, GET_USER_TRADES, GET_TRADES_FAILED } from "../constants/types";
import { getDirectQuote } from "./quote";
import { setAlert } from "./alert";
import axios from "axios";

// Get user trades
export const getUserTrades = token => async dispatch => {
    axios.defaults.headers.common["x-auth-token"] = token;
    try {
        const res = await axios.get(`/api/trade/user`);
        dispatch({
            type: GET_USER_TRADES,
            payload: res.data
        });
    } catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type: GET_TRADES_FAILED,
            errors: errors
        });
        dispatch(setAlert("Get user trades failed", "danger"));
    }
};

// Submit trade
export const newTrade = (formData, token) => async dispatch => {
    axios.defaults.headers.common["x-auth-token"] = token;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    const body = JSON.stringify(formData);
    try {
        const res = await axios.post("/api/trade", body, config);
        dispatch({
            type: TRADE_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type: TRADE_FAILURE,
            errors: errors
        });
        dispatch(setAlert("User not authorized", "danger"));
    }
};

// Close trade
export const closeTrade = (id, symbol, token, tdtoken) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        const direct = await dispatch(getDirectQuote(symbol, tdtoken));
        const price = direct[symbol]["askPrice"];
        const body = JSON.stringify({
            id: id,
            exit_price: price
        });
        axios.defaults.headers.common["x-auth-token"] = token;
        const res = await axios.post("/api/trade/close", body, config);
        dispatch({
            type: CLOSE_TRADE,
            payload: res.data
        });
        dispatch(setAlert("Trade closed", "success"));
    } catch (error) {
        dispatch({
            type: TRADE_FAILURE,
            errors: error
        });
        dispatch(setAlert("User not authorized, sign in oAuth", "danger"));
    }
};
