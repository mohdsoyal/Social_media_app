const initialState = {
    loading: false,
    reel: null,
    error: null,
  };
  
  export const reelReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_REEL_REQUEST':
        return { ...state, loading: true };
      case 'CREATE_REEL_SUCCESS':
        return { loading: false, reel: action.payload, error: null };
      case 'CREATE_REEL_FAILURE':
        return { loading: false, reel: null, error: action.payload };
      default:
        return state;
    }
  };
  