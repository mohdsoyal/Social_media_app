import axios from 'axios';

// Create Reel Action
export const createReelAction = (reelData, token) => async (dispatch) => {
  try {
    dispatch({ type: 'CREATE_REEL_REQUEST' });

    const response = await axios.post(
      'http://localhost:6393/api/reel', // Your backend endpoint
      reelData, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
          // No need to set 'Content-Type' when sending FormData
        },
      }
    );

    dispatch({
      type: 'CREATE_REEL_SUCCESS',
      payload: response.data, // Assuming this returns created reel data
    });
  } catch (error) {
    dispatch({
      type: 'CREATE_REEL_FAILURE',
      payload: error.response ? error.response.data : error.message,
    });
  }
};
