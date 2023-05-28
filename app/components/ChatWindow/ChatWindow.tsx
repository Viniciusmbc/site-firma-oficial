import React from "react";
import ChatBubble from "./ChatBubble/ChatBubble";

const ChatWindow: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-4 fixed z-50 bottom-0 right-0">
      <ChatBubble message="Clique aqui e faça um orçamento agora!" />
    </div>
  );
};

export default ChatWindow;
