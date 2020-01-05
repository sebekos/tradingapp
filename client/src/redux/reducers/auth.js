import { LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR, AUTH_LOADING, O_AUTH_SUCCESS } from "../constants/types";

const initialState = {
    token: localStorage.getItem("token"),
    tdtoken: localStorage.getItem("tdtoken"),
    isAuthenticated: false,
    oAuth: false,
    loading: true,
    user: null
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case AUTH_LOADING:
          return {
            ...state,
            loading: true
          };
        case USER_LOADED:
          return {
            ...state,
            isAuthenticated: true,
            loading: false,
            user: payload
          };
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        case O_AUTH_SUCCESS:
            localStorage.setItem("tdtoken", payload);
            return {
                ...state,
                oAuth: true,
                tdtoken: payload,
                loading: false
            };
        case LOGIN_FAIL:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        default:
            return state;
    }
}
