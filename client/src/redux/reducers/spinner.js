import { SET_LOADING } from "../constants/types";

const initialState = {
    loading: false
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_LOADING:
            return { ...state, loading: payload };
        default:
            return state;
    }
}
