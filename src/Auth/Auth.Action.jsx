// import axios from "axios";
// import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE } from './Auth.ActionType';
// import { api, API_BASE_URL } from '../Config/Api';

// export const loginUserAction = (loginData) => async (dispatch) => {
//     dispatch({ type: LOGIN_REQUEST });

//     try {
//         const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData.data);

//         if (data.token) {
//             localStorage.setItem("jwt", data.token);
//         }

//         console.log("Login...........",data)

//         dispatch({ type: LOGIN_SUCCESS, payload: data.token });
//     } catch (error) {
//         dispatch({ type: LOGIN_FAILURE, payload: error });
//     }
// };

// export const registerUserAction = (loginData) => async (dispatch) => {
//     dispatch({ type: REGISTER_REQUEST });

//     try {
//         const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, loginData.data);

//         if (data.jwt) {
//             localStorage.setItem("jwt", data.jwt);
//         }
//         console.log("Register...........",data)

//         dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
        
//     } catch (error) {
//         console.log("error..........",error)
//         dispatch({ type: REGISTER_FAILURE, payload: error });
//     }
// };


// // GET User Profile
// export const getProfileAction = (jwt) => async (dispatch) => {
//     dispatch({ type: GET_PROFILE_REQUEST }); 

//     try {
//         const { data } = await axios.get(`${API_BASE_URL}/api/user/profile`,
//             {
//                 headers: {
//                     Authorization: `Bearer ${jwt}`,
//                 },
//             }
//         );

//         if (data) {
//             localStorage.setItem("jwt", data.jwt); 
//         }

//         console.log("Profile...........", data);

//         dispatch({ type: GET_PROFILE_SUCCESS, payload: data });
//     } catch (error) {
//         console.log("errorProfile........", error);
//         dispatch({ type: GET_PROFILE_FAILURE, payload: error.message });
//     }
// };



// // Update User Profile
// // export const updateProfileAction = (reqData) => async (dispatch) => {
// //     dispatch({ type: UPDATE_PROFILE_REQUEST }); 

// //     try {
// //         const { data } = await api.post(
// //             `${API_BASE_URL}/api/user`, reqData );

    
// //         console.log("Update Profile...........", data);

// //         dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
// //     } catch (error) {
// //         console.log("error..........", error);
// //         dispatch({ type: UPDATE_PROFILE_FAILURE, payload: error.message });
// //     }
// // };







import axios from "axios";
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE
} from './Auth.ActionType';
import { API_BASE_URL } from '../Config/Api';

// Login User Action
export const loginUserAction = (loginData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData.data);

        if (data.token) {
            localStorage.setItem("jwt", data.token);
        }

        dispatch({ type: LOGIN_SUCCESS, payload: data.token });
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error });
    }
};

// Register User Action
export const registerUserAction = (loginData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, loginData.data);

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }

        dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error });
    }
};

// GET User Profile Action
export const getProfileAction = (jwt) => async (dispatch) => {
    dispatch({ type: GET_PROFILE_REQUEST });

    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/user/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        if (data && data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }

        dispatch({ type: GET_PROFILE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_PROFILE_FAILURE, payload: error.message });
    }
};
