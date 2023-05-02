import { motion, AnimatePresence } from "framer-motion";
import pencilImage from "public/pencilimg.png";
import { useState } from "react";

const PencilWritingAnimation = () => {
  const text = "Redação e Conteúdo";
  const textArray = text.split("");
  const delayIncrement = 0.1;
  const [animationFinished, setAnimationFinished] = useState(false);

  const renderLetters = () =>
    textArray.map((letter, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * delayIncrement }}
      >
        {/* Renderiza um span vazio para espaços em branco */}
        {letter === " " ? <span>&nbsp;</span> : letter}
      </motion.div>
    ));

  return (
    <div className="flex flex-col gap-9 items-center  mt-5">
      <motion.div
        className="relative w-14 h-14"
        animate={{
          x: [
            -10, -10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 130, 140, 150,
            160, 170, 180, 190, 200, 0,
          ],
          rotate: [0, -5, 5, -5, 5, -5, 5, -5, 5, 0],
          transition: {
            duration: 2,
            ease: "easeInOut",
            times: [0, 3],
            repeatType: "mirror",
          },
        }}
        onAnimationComplete={() => setAnimationFinished(true)}
        exit={{
          top: 0,
          left: 0,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
      >
        <img
          src={pencilImage}
          alt="pencil"
          className={`relative top-[${animationFinished ? 0 : 40}px]  left-[${
            animationFinished ? 0 : -80
          }px] w-14 h-14`}
        />
      </motion.div>

      <AnimatePresence mode="wait">
        <strong className=" mt-2 text-xl uppercase flex flex-wrap">
          {renderLetters()}
        </strong>
      </AnimatePresence>
    </div>
  );
};

export default PencilWritingAnimation;
