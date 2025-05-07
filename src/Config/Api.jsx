// import axios from "axios";

// export const API_BASE_URL ="http://localhost:6393";
// const jwtToken=localStorage.getItem("jwt")
// console.log("APi....................",jwtToken);

// export const api=axios.create({baseURL:API_BASE_URL,headers:{
//     "Authorization":`Bearer ${jwtToken}`,
//     "Content-Type":"application/json"
// }})



import axios from "axios";

// Set the base URL for your API
export const API_BASE_URL = "http://localhost:6393";

// Create an axios instance
export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// Function to get the JWT token dynamically
const getJwtToken = () => {
    return localStorage.getItem("jwt");
};

// Interceptor to add JWT token to request headers if it exists
api.interceptors.request.use(
    (config) => {
        const token = getJwtToken();
        if (token) {
            // If the token is available, set it in the Authorization header
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

