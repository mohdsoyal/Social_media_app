// import {
//     LOGIN_REQUEST,
//     LOGIN_SUCCESS,
//     LOGIN_FAILURE,
//     REGISTER_REQUEST,
//     REGISTER_SUCCESS,
//     REGISTER_FAILURE,
//     GET_PROFILE_SUCCESS,
//     GET_PROFILE_REQUEST
//   } from "./Auth.ActionType";
  
  


// const initialstate={
//     jwt:null,
//     error:null,
//     loading:false,
//     user:null
// }
// export const authReducer=(state=initialstate,action)=>{

//     switch (action.type) {
//         case LOGIN_REQUEST:
//         case REGISTER_REQUEST:    
//         case GET_PROFILE_REQUEST:
//             return {...state, loading:true, error:null}

//         case GET_PROFILE_SUCCESS:
//             return {...state, user:action.payload, error:null,loading:false}   
             
//         case LOGIN_SUCCESS:
//         case REGISTER_SUCCESS:    
//                 return {...state, jwt:action.payload, loading:false, error:null}
//         case LOGIN_FAILURE:
//         case REGISTER_FAILURE:  

//             return {...state, loading:false, error:action.payload}

//         default:
//             return state;
//     }

// }



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

const initialState = {
    jwt: null,
    error: null,
    loading: false,
    user: null,
    
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // Login, Register, and Profile Requests
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case GET_PROFILE_REQUEST:
            return { ...state, loading: true, error: null };

        // Get Profile Success
        case GET_PROFILE_SUCCESS:
            return { ...state, user: action.payload, error: null, loading: false };

        // Login & Register Success
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return { ...state, jwt: action.payload, loading: false, error: null };

        // Login & Register Failure
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
            return { ...state, loading: false, error: action.payload };

        // Get Profile Failure
        case GET_PROFILE_FAILURE:
            return { ...state, loading: false, error: action.payload };

            case "LOGOUT_USER":
                return {
                  ...state,
                  jwt: null,
                  user: null,
                  error: null,
                  loading: false,
                };
                  

        default:
            return state;
    }
};
