import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './Auth.ActionType';
import { API_BASE_URL } from '../Config/Api';

export const loginUserAction = (loginData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData.data);

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }

        console.log("Login...........",data)

        dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error });
    }
};

export const registerUserAction = (loginData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, loginData.data);

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }
        console.log("Register...........",data)

        dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
    } catch (error) {
        console.log("error..........",error)
        dispatch({ type: REGISTER_FAILURE, payload: error });
    }
};
