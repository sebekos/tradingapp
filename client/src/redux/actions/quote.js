import { QUOTE_SUCCESS, QUOTE_FAILED, YEARLY_CHART_SUCCESS, MINUTE_CHART_SUCCESS, CHART_FAILED } from "../constants/types";
import { setAlert } from './alert'
import axios from "axios";

// Get quote
export const getQuote = (symbol, tdtoken) => async dispatch => {
      delete axios.defaults.headers.common['x-auth-token'];
      const api = 'https://api.tdameritrade.com/v1/marketdata/' + symbol + '/quotes?apikey=SEBEKOS6';
      const token = 'Bearer ' + tdtoken;
      try {
            const res = await axios.get(api , { headers: {"Authorization" : token } });
            dispatch({
                  type: QUOTE_SUCCESS,
                  payload: res['data'][symbol]
            });
      } catch (err) {
            dispatch({
                  type: QUOTE_FAILED
            });
            dispatch(setAlert('Please login oAuth', 'danger'))
      }
};

// Get yearly chart
export const getYearlyChart = (symbol, tdtoken) => async dispatch => {
      delete axios.defaults.headers.common['x-auth-token'];
      const api = 'https://api.tdameritrade.com/v1/marketdata/' + symbol + '/pricehistory?periodType=year&period=1&frequencyType=daily'
      const token = 'Bearer ' + tdtoken;
      try {
            const res = await axios.get(api , { headers: {"Authorization" : token } });
            dispatch({
                  type: YEARLY_CHART_SUCCESS,
                  payload: res.data
            });
      } catch (err) {
            dispatch({
                  type: CHART_FAILED
            });
      }
}