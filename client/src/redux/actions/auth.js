import { LOGIN_SUCCESS, LOGIN_FAIL } from "../constants/types";
import axios from "axios";

// Login User
export const login = formData => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    const body = JSON.stringify(formData);
    try {
        const res = await axios.post("/api/auth", body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type: LOGIN_FAIL
        });
    }
};
