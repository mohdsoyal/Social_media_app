import { REELS_REQUEST, REELS_SUCCESS, REELS_FAILURE } from "../Post/Post.ActionType";

const initialState = {
  loading: false,
  reels: [],
  error: null,
};

export function reelsReducer(state = initialState, action) {
  switch (action.type) {
    case REELS_REQUEST:
      return { ...state, loading: true, error: null };
    case REELS_SUCCESS:
      return { ...state, loading: false, reels: action.payload };
    case REELS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
