import { SET_ALERT } from "../constants/types";

const initialState = {
    fields: {},
    loading: true,
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_ALERT:
            return {
                ...state
            };
        default:
            return state;
    }
}
