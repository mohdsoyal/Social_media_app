import axios from 'axios';
import { REELS_FAILURE, REELS_REQUEST, REELS_SUCCESS } from '../Post/Post.ActionType';
import { api } from '../../Config/Api';

export const createReelAction = (reelData, token) => async (dispatch) => {
  try {
    dispatch({ type: 'CREATE_REEL_REQUEST' });

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    // Replace localhost:8080 with your backend base URL and port
    const { data } = await axios.post('http://localhost:6393/api/reel', reelData, config);

    dispatch({ type: 'CREATE_REEL_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ 
      type: 'CREATE_REEL_FAIL', 
      payload: error.response && error.response.data ? error.response.data : error.message,
    });
    throw error;
  }
};




export const getAllReelAction = () => async (dispatch) => {
  dispatch({ type: REELS_REQUEST });
  try {
    const { data } = await api.get("/api/reel");
    console.log("Fetched Reels......:", data); 
    dispatch({ type: REELS_SUCCESS, payload: data });
  } catch (error) {
    console.log("Error getting all reels:", error.response?.data || error.message);
    dispatch({
      type: REELS_FAILURE,
      payload: error.response?.data || error.message,
    });
  }
};

