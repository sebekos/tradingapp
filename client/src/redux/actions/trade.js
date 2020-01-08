import { TRADE_SUCCESS, TRADE_FAILURE, GET_USER_TRADES, GET_TRADES_FAILED } from "../constants/types";
import axios from "axios";

// Get user trades
export const getUserTrades = () => async dispatch => {
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
      }
}

// Get quote
export const newTrade = (formData, token) => async dispatch => {
      axios.defaults.headers.common['x-auth-token'] = token;
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
      }
};