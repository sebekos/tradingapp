import { LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR, O_AUTH_SUCCESS, LOGOUT, CLEAR_PROFILE } from "../constants/types";
import setAuthToken from '../../utils/setAuthToken';
import axios from "axios";
import qs from 'query-string'

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
  delete axios.defaults.headers.common['x-auth-token'];
  const config = {
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      }
  };
  const data = qs.stringify({
    "grant_type" : "authorization_code",
    "refresh_token" : "",
    "access_type" : "offline",
    "code" : token,
    "client_id" : "SEBEKOS6",
    "redirect_uri" : "http://localhost:3000/oauth"
  })

  try {
      const res = await axios.post("https://api.tdameritrade.com/v1/oauth2/token", data, config);
      dispatch({
          type: O_AUTH_SUCCESS,
          payload: res.data.access_token
      });
  } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
  }
};

// Logout / Clear profile
export const logout = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};