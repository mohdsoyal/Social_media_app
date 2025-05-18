import { api } from "../../Config/Api";
import {
  CREATE_MESSAGE_REQUEST,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAILURE,
  CREATE_CHAT_REQUEST,
  CREATE_CHAT_SUCCESS,
  CREATE_CHAT_FAILURE,
  GET_ALL_CHATS_REQUEST,
  GET_ALL_CHATS_SUCCESS,
  GET_ALL_CHATS_FAILURE
} from "./message.actionType";

export const createMessage = (message) => async (dispatch) => {
  dispatch({ type: CREATE_MESSAGE_REQUEST });

  try {
    const { data } = await api.post(`/api/message/${message.chatId}`,message);
    console.log("Created Message:", data);

    dispatch({
      type: CREATE_MESSAGE_SUCCESS,
      payload: data
    });
  } catch (error) {
    console.error("Message  creation failed:", error);
    dispatch({
      type: CREATE_MESSAGE_FAILURE,
      payload: error.response?.data?.message || error.message
    });
  }
};




export const createChat = (chat) => async (dispatch) => {
  dispatch({ type: CREATE_CHAT_REQUEST });

  try {
    const { data } = await api.post(`/api/chat`,chat);
    console.log("Created chat:", data);

    dispatch({
      type: CREATE_CHAT_SUCCESS,
      payload: data
    });
  } catch (error) {
    console.error("chat  creation failed:", error);
    dispatch({
      type: CREATE_CHAT_FAILURE,
      payload: error.response?.data?.message || error.message
    });
  }
};


export const getAllChats = () => async (dispatch) => {
  dispatch({ type: GET_ALL_CHATS_REQUEST });

  try {
    const { data } = await api.get(`/api/chat`);
    console.log("get all  chats messages :", data);

    dispatch({
      type: GET_ALL_CHATS_SUCCESS,
      payload: data
    });
  } catch (error) {
    console.error("chat  creation failed:", error);
    dispatch({
      type: GET_ALL_CHATS_FAILURE,
      payload: error.response?.data?.message || error.message
    });
  }
};


