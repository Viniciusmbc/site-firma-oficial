import React, { useState } from "react";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

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

  const handleClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = () => {
    // Aqui você pode adicionar a lógica para enviar a mensagem
    console.log(userMessage);
    setUserMessage("");
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-white shadow-lg bg-[url(../public/logo/brainImage.png)]"></div>
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
        <motion.div
          className="absolute bottom-12 right-0 bg-white w-64 h-48 border border-gray-300 rounded-lg mt-8 p-4"
          initial="hidden"
          animate="visible"
          variants={chatWindowVariants}
        >
          <motion.div
            className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
            onClick={handleClick}
          >
            {message}
          </motion.div>
          <div className="mb-2">
            <input
              type="text"
              value={userMessage}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-2 py-1 w-full"
              placeholder="Digite sua mensagem..."
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded-lg"
            onClick={handleSendMessage}
          >
            Enviar
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ChatBubble;
