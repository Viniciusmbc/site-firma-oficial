import { useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-64 h-64 bg-gray-200 rounded-md p-4 m-4 flex flex-col items-center justify-center cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-center">{description}</p>

      {isHovered && (
        <motion.div
          className="bg-white rounded-md absolute top-0 left-0 w-full h-full p-4 flex flex-col items-center justify-center space-y-4"
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: -90 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-lg text-center">{description}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Action Button
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Card;
