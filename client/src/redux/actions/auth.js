import { LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR, O_AUTH_SUCCESS } from "../constants/types";
import setAuthToken from '../../utils/setAuthToken';
import axios from "axios";

// Load user
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get('/api/auth');
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      });
    }
};

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

// oAuthLogin
export const oAuthLogin = token => async dispatch => {
  console.log('oauth sucess in actions')
  console.log(token)
  dispatch({
      type: O_AUTH_SUCCESS,
      payload: token
  });
};
