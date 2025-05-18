import React from 'react';

function ChatMessage({ item, authUserId }) {
  const isReqUserMessage = authUserId === item.user?.id;

  return (
    <div className={`flex ${isReqUserMessage ? "justify-end" : "justify-start"} text-white`}>
      <div className={`p-1 ${item.image ? "rounded-md" : "px-5 rounded-full"} bg-[#191c29] max-w-xs`}>
        {item.image && (
          <img
            src={item.image}
            alt="chat-img"
            className="w-full h-auto object-cover rounded-md mb-2"
          />
        )}
        <p className="py-2 break-words">{item.content}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
