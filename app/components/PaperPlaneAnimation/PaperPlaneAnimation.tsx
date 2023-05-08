import { motion } from "framer-motion";
import { useState } from "react";

interface Position {
  x: number;
  y: number;
}

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0, 0, 0, 0.3)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "#098A5B",
  },
};

const PaperPlaneAnimation = () => {
  const [animateComplete, setAnimateComplete] = useState(false);

  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const handleAnimationComplete = () => {
    setAnimateComplete(true);
  };

  return (
    <>
      {!animateComplete && (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          className="w-[15%] py-8 overflow-visible stroke-[#098A5B] fill-[#098A5B] "
        >
          <motion.path
            d="M58 0L0 29L17.0375 34.8L18.125 54.375L27.1875 44.225L36.25 58L58 0ZM27.1875 37.7L42.775 16.3125L20.3 31.9L9.425 28.275L51.475 7.25L35.1625 50.025L27.1875 37.7Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            onAnimationComplete={handleAnimationComplete}
          />
        </motion.svg>
      )}
      {animateComplete && (
        <motion.div
          animate={{
            x: 500,
            y: -500,
            rotate: 380,
            transition: {
              duration: 5,
              ease: "easeInOut",
            },
          }}
          onAnimationComplete={() => {
            setPosition({ x: 500, y: -500 });
          }}
          style={{ x: position.x, y: position.y }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            className="w-[15%] py-8 overflow-visible stroke-[#098A5B] fill-[#098A5B] "
          >
            <motion.path
              d="M58 0L0 29L17.0375 34.8L18.125 54.375L27.1875 44.225L36.25 58L58 0ZM27.1875 37.7L42.775 16.3125L20.3 31.9L9.425 28.275L51.475 7.25L35.1625 50.025L27.1875 37.7Z"
              fill="#098A5B"
              animate={{
                rotate: [0, 50, 360],
                transition: {
                  duration: 9,
                  ease: "linear",
                  times: [3, 9, 1],
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
                backgroundColor: "#FFF",
                position: "absolute",
                y: 0,
                x: 0,
              }}
              animate={{
                x: 500,
                y: -500,
                rotate: 200,

                transition: {
                  duration: 50,
                  ease: "easeInOut",
                },
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                delay: i * 5,
                repeatDelay: 5,
              }}
            />
          ))}
        </motion.div>
      )}
    </>
  );
};

export default PaperPlaneAnimation;
