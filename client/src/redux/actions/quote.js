import { QUOTE_SUCCESS, QUOTE_FAILED } from "../constants/types";
import axios from "axios";

// Get quote
export const getQuote = (symbol, tdtoken) => async dispatch => {
      delete axios.defaults.headers.common['x-auth-token'];
      const api = 'https://api.tdameritrade.com/v1/marketdata/' + symbol + '/quotes?apikey=SEBEKOS6';
      const token = 'Bearer ' + tdtoken;
      console.log(token);
      console.log(symbol)
      try {
            const res = await axios.get(api , { headers: {"Authorization" : token } });
            dispatch({
                  type: QUOTE_SUCCESS,
                  payload: res['data'][symbol]
            });
      } catch (err) {
            console.log(err)
            dispatch({
                  type: QUOTE_FAILED
            });
    }
};