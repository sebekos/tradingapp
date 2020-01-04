import { QUOTE_SUCCESS, QUOTE_FAILED } from "../constants/types";

const initialState = {
    symbol: '',
    data: null,
    loading: true
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case QUOTE_SUCCESS:
          return {
            ...state,
            data: payload,
            loading: false
          };
        case QUOTE_FAILED:
          return {
            ...state,
            loading: false
          };
        default:
            return state;
    }
}
