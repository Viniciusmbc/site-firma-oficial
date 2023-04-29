import { motion } from "framer-motion";
import pencilImage from "public/pencilimg.png";

const PencilWritingAnimation = () => {
  const text =
    "Fornecemos soluções de criação de conteúdo que não apenas atrairão mais acessos, mas também manterão o público envolvido e interessado em seu negócio.";
  const textArray = text.split("");
  const delayIncrement = 0.1;

  const renderLetters = () =>
    textArray.map((letter, index) => (
      <motion.div
        key={index}
        className="inline-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * delayIncrement }}
      >
        {letter}
      </motion.div>
    ));

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="relative w-48 h-48 mr-8"
        animate={{
          y: [0, 30, 30, -30, -30, -30, -30, -30, -30, -30, 30, 10, 0],
          x: [0, 10, 10, 50, 50, 10, -10, 10, 30, 50, 50, 0],
          rotate: [0, -10, 10, -10, 10, -10, 10, -10, 10, 0],
          transition: {
            duration: 1.5,
            ease: "easeInOut",
            times: [0, 0.1, 1, 0.3, 0.4, 0.5, 0.6, 0.8, 0.9, 1],

            repeatType: "mirror",
          },
        }}
      >
        <img
          src={pencilImage}
          alt="pencil"
          className="relative top-0 left-0 w-14 h-14"
        />
      </motion.div>
      <div className="font-bold text-white">
        <div className="writing-text inline-block">{renderLetters()}</div>
      </div>
    </div>
  );
};

export default PencilWritingAnimation;
