import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    AUTH_LOADING,
    O_AUTH_SUCCESS,
    LOGOUT
} from "../constants/types";

const initialState = {
    token: localStorage.getItem("token"),
    tdtoken: localStorage.getItem("tdtoken"),
    tdrefresh: null,
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
            var t1 = new Date();
            t1.setSeconds(t1.getMinutes() + 30);
            localStorage.setItem("token", payload.token);
            localStorage.setItem("token_expires_at", t1);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        case O_AUTH_SUCCESS:
            var t2 = new Date();
            t2.setSeconds(t2.getSeconds() + payload.expires_in);
            localStorage.setItem("tdtoken", payload.access_token);
            localStorage.setItem("tdfresh", payload.refresh_token);
            localStorage.setItem("tdtoken_expires_at", t2);
            return {
                ...state,
                oAuth: true,
                tdtoken: payload.access_token,
                tdrefresh: payload.refresh_token,
                loading: false
            };
        case LOGIN_FAIL:
        case LOGOUT:
        case AUTH_ERROR:
            localStorage.removeItem("token");
            localStorage.removeItem("token_expires_at");
            localStorage.removeItem("tdtoken");
            localStorage.removeItem("tdtoken_expires_at");
            localStorage.removeItem("tdfresh");
            return {
                ...state,
                token: null,
                tdtoken: null,
                isAuthenticated: false,
                loading: false
            };
        default:
            return state;
    }
}
