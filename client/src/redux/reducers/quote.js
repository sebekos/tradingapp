import { QUOTE_SUCCESS, QUOTE_FAILED, YEARLY_CHART_SUCCESS, CHART_FAILED } from "../constants/types";

const initialState = {
    symbol: '',
    data: null,
    yearlychart: null,
    loading: true
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case QUOTE_SUCCESS:
          return {
            ...state,
            data: payload,
            symbol: payload.symbol,
            loading: false
          };
        case YEARLY_CHART_SUCCESS:
          return {
            ...state,
            yearlychart: payload,
            loading: false
          }
        case QUOTE_FAILED:
          return {
            ...state,
            data: null,
            symbol: null,
            loading: false
          };
        case CHART_FAILED:
          return {
            ...state,
            yearlychart: null,
            loading: false
          }
        default:
            return state;
    }
}
