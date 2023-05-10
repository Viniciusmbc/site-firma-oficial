// React Hooks
import React, { useState } from "react";

// Components
import ChatMessage from "../ChatWindow/ChatMessages.tsx/ChatMessages";

// Framer Motion
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
// ChatBotImage
import iconeChat from "public/chatbotImg/iconeChat.png";

interface ChatBubbleProps {
  message: string;
}

const chatBubbleVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const chatWindowVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [userName, setUserName] = useState("");

  const handleClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = () => {
    // Aqui você pode adicionar a lógica para enviar a mensagem
    console.log(userMessage);
    setUserMessage("");
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        <img
          src={iconeChat}
          width={100}
          height={100}
          alt="Chat Bot Icon"
          className=" w-full h-full max-w-[100px] max-h-[100px] shadow rounded-full animate-pulse"
        />
        <motion.div
          className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
          initial="hidden"
          animate={isChatOpen ? "hidden" : "visible"}
          variants={chatBubbleVariants}
          onClick={handleClick}
        >
          {message}
        </motion.div>
      </div>

      {isChatOpen && (
        <>
          <motion.div
            className="fixed bottom-4 right-4 bg-white w-full max-w-xs max-h-[80vh] border border-gray-300 rounded-lg mt-8 p-4 overflow-y-auto"
            initial="hidden"
            animate="visible"
            variants={chatWindowVariants}
          >
            <motion.div
              className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center text-lg"
              initial="hidden"
              animate="visible"
              variants={chatBubbleVariants}
            >
              Qual seu nome?
            </motion.div>
            <div className="mt-4">
              <input
                type="text"
                value={userMessage}
                onChange={handleInputChange}
                placeholder="Digite sua mensagem"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleSendMessage}
              >
                Enviar
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg ml-2"
                onClick={handleCloseChat}
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ChatBubble;
