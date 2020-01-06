import { TRADE_SUCCESS, TRADE_FAILURE } from "../constants/types";
import axios from "axios";

// Get quote
export const newTrade = (formData) => async dispatch => {
      const config = {
            headers: {
                  "Content-Type": "application/json"
            }
      };
      const body = JSON.stringify(formData);
      console.log('Trying...');
      try {
            const res = await axios.post("/api/trade", body, config);
            dispatch({
                  type: TRADE_SUCCESS,
                  payload: res.data
            });
      } catch (err) {
            const errors = err.response.data.errors;
            dispatch({
                  type: TRADE_FAILURE
            });
      }
};