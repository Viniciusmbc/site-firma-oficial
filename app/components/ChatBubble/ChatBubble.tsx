import React, { useState } from "react";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import ChatMessage from "../ChatWindow/ChatMessages.tsx/ChatMessages";
import brainimage from "public/logo/brainImage.png";

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

  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        <img src={brainimage} alt="brain" className="w-10 h-10 bg-white" />
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
            className="absolute bottom-12 right-0 bg-white w-full max-w-xs h-48 border border-gray-300 rounded-lg mt-8 p-4"
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
              O que você quer desenvolver?
            </motion.div>

            <ChatMessage
              message="E-commerce"
              isOption={true}
              handleOptionClick={handleOptionClick}
            />
            <ChatMessage
              message="Landing Page"
              isOption={true}
              handleOptionClick={handleOptionClick}
            />
            <ChatMessage
              message="Outra opção"
              isOption={true}
              handleOptionClick={handleOptionClick}
            />
          </motion.div>
          <div>
            {selectedOption && <p>Você selecionou: {selectedOption}</p>}
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBubble;
