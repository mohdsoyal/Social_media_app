import { api } from "../../Config/Api";
import {
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  GET_ALL_POST_FAILURE,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  GET_USERS_POST_FAILURE,
  GET_USERS_POST_REQUEST,
  GET_USERS_POST_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
} from "./Post.ActionType";

// Create new Post
export const createPostAction = (postData) => async (dispatch) => {
  dispatch({ type: CREATE_POST_REQUEST });

  try {
    const { data } = await api.post("/api/posts", postData);  // Using Axios instance with interceptor
    dispatch({ type: CREATE_POST_SUCCESS, payload: data });
    console.log("Created Post", data);
  } catch (error) {
    console.log("Error creating post:", error.response?.data || error.message);
    dispatch({
      type: CREATE_POST_FAILURE,
      payload: error.response?.data || error.message,
    });
  }
};

// Get All Posts
export const getAllPostAction = () => async (dispatch) => {
  dispatch({ type: GET_ALL_POST_REQUEST });
  try {
    const { data } = await api.get("/api/posts");
    console.log("Fetched posts from server:", data); // Log the server response
    dispatch({ type: GET_ALL_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log("Error getting all posts:", error.response?.data || error.message);
    dispatch({
      type: GET_ALL_POST_FAILURE,
      payload: error.response?.data || error.message,
    });
  }
};

// Get User's Posts
export const getUsersPostAction = (userId) => async (dispatch) => {
  dispatch({ type: GET_USERS_POST_REQUEST });
  try {
    const { data } = await api.get(`/api/posts/user/${userId}`);
    dispatch({ type: GET_USERS_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log("Error getting user posts:", error.response?.data || error.message);
    dispatch({
      type: GET_USERS_POST_FAILURE,
      payload: error.response?.data || error.message,
    });
  }
};

// Like Post
export const likePostAction = (postId) => async (dispatch) => {
  dispatch({ type: LIKE_POST_REQUEST });
  try {
    const { data } = await api.get(`/api/posts/like/${postId}`);
    dispatch({ type: LIKE_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log("Error liking post:", error.response?.data || error.message);
    dispatch({
      type: LIKE_POST_FAILURE,
      payload: error.response?.data || error.message,
    });
  }
};






// create Comments
export const createCommentAction = ({ postId, content }) => async (dispatch) => {
  dispatch({ type: CREATE_COMMENT_REQUEST });

  try {
    const jwt = localStorage.getItem("jwt");

    const { data } = await api.post(
      `/api/comment/${postId}`, // ✅ Path param
      { content },              // ✅ Body with `content`
      {
        headers: {
          Authorization: `Bearer ${jwt}`,     // ✅ Header
          "Content-Type": "application/json", // ✅ Ensure JSON content
        },
      }
    );

    dispatch({ type: CREATE_COMMENT_SUCCESS, payload: data });
    console.log("Created Comment", data);
  } catch (error) {
    console.log("Error creating Comment:", error.response?.data || error.message);
    dispatch({
      type: CREATE_COMMENT_FAILURE,
      payload: error.response?.data || error.message,
    });
  }
};
