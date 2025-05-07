import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk"; // ✅ correct import
import { authReducer } from "../Auth/Auth.Reducer";
import { postReducer } from "../Componenet/Post/Post.Reducer";

const rootReducers = combineReducers({
  auth:authReducer,
  post:postReducer
  
});

const store = legacy_createStore(rootReducers, applyMiddleware(thunk));

export default store;
