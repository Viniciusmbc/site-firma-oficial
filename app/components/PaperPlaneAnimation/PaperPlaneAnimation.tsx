import { motion } from "framer-motion";
import { useState } from "react";

interface Position {
  x: number;
  y: number;
}

const PaperPlaneAnimation = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  return (
    <motion.div
      animate={{
        x: 500,
        y: -500,
        rotate: 380,
        transition: {
          duration: 3,
          ease: "easeInOut",
        },
      }}
      onAnimationComplete={() => {
        setPosition({ x: 500, y: -500 });
      }}
      style={{ x: position.x, y: position.y }}
    >
      <motion.svg
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" ml-4 mt-6 "
      >
        <motion.path
          d="M58 0L0 29L17.0375 34.8L18.125 54.375L27.1875 44.225L36.25 58L58 0ZM27.1875 37.7L42.775 16.3125L20.3 31.9L9.425 28.275L51.475 7.25L35.1625 50.025L27.1875 37.7Z"
          fill="#098A5B"
          animate={{
            rotate: [90, 0, 360],
            transition: {
              duration: 1,
              ease: "linear",
              times: [6, 6, 1],
            },
          }}
        />
      </motion.svg>
      {[...Array(1)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "5px",
            backgroundColor: "#098A5B",
            position: "absolute",
            y: 0,
            x: 0,
          }}
          animate={{
            x: 500,
            y: -500,
            rotate: 200,

            transition: {
              duration: 20,
              ease: "easeInOut",
            },
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            delay: i * 5,
            repeatDelay: 5,
          }}
        />
      ))}
    </motion.div>
  );
};

export default PaperPlaneAnimation;
