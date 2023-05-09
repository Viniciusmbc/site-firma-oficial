import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

interface ChatBubbleProps {
  message: string;
}

const chatBubbleVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="flex items-center space-x-2">
      <div className=" p-5 rounded-full bg-white shadow-inherit  shadow-lg">
        OTC
      </div>
      <motion.div
        className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
        initial="hidden"
        animate="visible"
        variants={chatBubbleVariants}
        onClick={handleClick}
      >
        {message}
      </motion.div>

      {isChatOpen && (
        <div className="absolute top-0 right-0 bg-white w-64 h-48 border border-gray-300 rounded-lg mt-8">
          {/* Conteúdo da janela de conversa */}
          <p>Conteúdo da conversa...</p>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
