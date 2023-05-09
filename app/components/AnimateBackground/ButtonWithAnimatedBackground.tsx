import { motion } from "framer-motion";

const ButtonWithSunsetGradient = () => {
  const buttonVariants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: "100% 50%",
    },
  };

  return (
    <motion.button
      className="text-lg  border border-[#098A5C] text-white p-7 my-9"
      style={{
        backgroundImage: "linear-gradient(to right, #0A3D2B, #8A6917, #292e37)",
        backgroundSize: "400%",
        textShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
      }}
      animate="animate"
      variants={buttonVariants}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      Fale Conosco
    </motion.button>
  );
};

export default ButtonWithSunsetGradient;
