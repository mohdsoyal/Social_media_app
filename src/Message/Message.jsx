import React, { useEffect, useState } from 'react';
import { Avatar, Backdrop, CircularProgress, Grid, IconButton } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useDispatch, useSelector } from 'react-redux';

import SearchUser from './SearchUser';
import UserChatCard from './UserChatCard';
import ChatMessage from './ChatMessage';
import { createMessage, getAllChats } from '../Redux/Message/message.action';
import { uploadToCloudinary } from '../Utils/UploadToCloudniry';

function Message() {
  const dispatch = useDispatch();
  const { message, auth } = useSelector(store => store);

  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getAllChats());
  }, [dispatch]);

  // Sync messages and current chat if chats update or on refresh
  useEffect(() => {
    if (!currentChat || !message.chats) return;

    const freshChat = message.chats.find(c => c.id === currentChat.id);
    if (freshChat) {
      setMessages(Array.isArray(freshChat.messages || freshChat.message) ? (freshChat.messages || freshChat.message) : []);
      setCurrentChat(freshChat);
    } else {
      setMessages([]);
    }
  }, [currentChat, message.chats]);

  const handleSelectImage = async (e) => {
    setLoading(true);
    const imgUrl = await uploadToCloudinary(e.target.files[0], "image");
    setSelectedImage(imgUrl);
    setLoading(false);
  };

  const handleCreateMessage = async (value) => {
    if (!currentChat) return;

    const newMessage = {
      chatId: currentChat.id,
      content: value,
      image: selectedImage
    };

    await dispatch(createMessage(newMessage));

    // Append new message locally for instant UI update
    const tempMessage = {
      ...newMessage,
      user: auth.user,
      id: Date.now(),  // Temporary id until backend returns real one
      createdAt: new Date().toISOString()
    };

    setMessages(prev => [...prev, tempMessage]);
    setSelectedImage(null);
  };

  // Get the other user from current chat
  const otherUser = currentChat?.users?.find(user => user.id !== auth.user.id);

  return (
    <div>
      <Grid container className="h-screen overflow-y-hidden">
        {/* Sidebar */}
        <Grid item xs={3} className="px-5 bg-gray-100">
          <div className="flex h-full flex-col space-y-4">
            <div className="flex items-center space-x-4 py-5">
              <WestIcon />
              <h1 className="text-xl font-bold">Home</h1>
            </div>

            <div className="h-full overflow-y-scroll hideScrollbar">
              <SearchUser />
              <div className="mt-5 font-bold">
                {Array.isArray(message.chats) &&
                  message.chats.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setCurrentChat(item);
                        setMessages(Array.isArray(item.messages || item.message) ? (item.messages || item.message) : []);
                      }}
                    >
                      <UserChatCard chat={item} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Grid>

        {/* Chat Panel */}
        <Grid item xs={9} className="h-full bg-white">
          {currentChat ? (
            <div>
              {/* Chat Header */}
              <div className="flex justify-between items-center border-l p-5">
                <div className="flex items-center space-x-3">
                  <Avatar src={currentChat.chatImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUndSzxcF1UbSXX3bVILVaUbSIhoc_GEA8g&s'} />
                  <p>
                    {otherUser
                      ? `${otherUser.firstName ?? ''} ${otherUser.lastName ?? ''}`.trim()
                      : "Unknown User"}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <IconButton><CallIcon /></IconButton>
                  <IconButton><VideoCallIcon /></IconButton>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="hideScrollbar overflow-y-scroll h-[70vh] px-2 space-y-5 py-5">
                {Array.isArray(messages) && messages.length > 0 ? (
                  messages.map((item) => (
                    <ChatMessage key={item.id} item={item} authUserId={auth.user.id} />
                  ))
                ) : (
                  <p className="text-center text-gray-500">No messages yet.</p>
                )}
              </div>
            </div>
          ) : (
            <div className="h-full space-y-5 flex flex-col justify-center items-center">
              <ChatBubbleOutlineIcon sx={{ fontSize: "12rem" }} />
              <p className="text-xl font-semibold">No Chat Selected</p>
            </div>
          )}

          {/* Input Box */}
          <div className="sticky bottom-0 bg-white">
            <div className="py-5 flex items-center justify-center space-x-5">
             {selectedImage &&  <img className='w-[5rem] h-[5rem] object-cover px-2' src={selectedImage} alt="" srcset="" />}
              <input
                onKeyPress={(e) => {
                  if (e.key === "Enter" && e.target.value.trim()) {
                    handleCreateMessage(e.target.value.trim());
                    e.target.value = "";
                  }
                }}
                className="bg-transparent border border-[#3b4054] rounded-full w-[90%] py-3 px-5 outline-none"
                placeholder="Type Message..."
                type="text"
              />
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSelectImage}
                  className="hidden"
                  id="img"
                />
                <label htmlFor="img" className="cursor-pointer">
                  <AddPhotoAlternateIcon />
                </label>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

       <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
       
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Message;
