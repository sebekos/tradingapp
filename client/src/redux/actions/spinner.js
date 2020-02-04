import { SET_LOADING } from "../constants/types";

export const setLoading = curr => dispatch => {
    dispatch({
        type: SET_LOADING,
        payload: curr
    });
};
