import { TRADE_SUCCESS, CLOSE_TRADE, TRADE_FAILURE, GET_USER_TRADES, GET_TRADES_FAILED } from "../constants/types";

const initialState = {
    trades: [],
    loading: true,
    errors: null
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_USER_TRADES:
          console.log(payload);
          return {
            ...state,
            trades: payload
          }
        case TRADE_SUCCESS:
          return {
            ...state,
            trades: [payload, ...state.trades],
            loading: false
          };
        case CLOSE_TRADE:
          const updatedTrades = state.trades.map( item => {
            if(payload._id === item._id){
              return payload;
            }
            return item;
          });
          return {
            ...state,
            trades: updatedTrades,
            loading: false
          };
        case TRADE_FAILURE:
        case GET_TRADES_FAILED:
          return {
            ...state,
            errors: payload,
            loading: false
          };
        default:
            return state;
    }
}
