import { TRADE_SUCCESS, TRADE_FAILURE } from "../constants/types";

const initialState = {
    trades: null,
    loading: true
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case TRADE_SUCCESS:
          return {
            ...state,
            data: payload,
            loading: false
          };
        case TRADE_FAILURE:
          return {
            ...state,
            loading: false
          };
        default:
            return state;
    }
}
