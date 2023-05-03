import brainImage from "public/logo/LogoOtc.png";
import lua5 from "public/logo/lua3.png";
import lua2 from "public/logo/lua2.png";

import { motion } from "framer-motion";

const LogoAnimation = () => {
  return (
    <div className="relative w-[150px] h-[150px] max-w-xs">
      <motion.img
        src={brainImage}
        alt="Earth"
        className="w-[100px] z-10 absolute h-[100px]"
      />
      <motion.img
        src={lua5}
        alt="Moon"
        className="absolute top-0 left-0 w-full h-full"
        animate={{
          x: ["-40%", "50%", "40%", "-60%"],
          y: ["-20%", "-30%", "-40%", "30%"],
          zIndex: [10, 1], // Adicionando z-index
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 5,
          ease: "linear",
        }}
      />
      <motion.img
        src={lua2}
        alt="Moon"
        className="absolute top-0 left-0 w-full h-full"
        animate={{
          x: ["50%", "-60%", "-40%", "30%"],
          y: ["-20%", "-30%", "-40%", "30%"],
          zIndex: [1, 10], // Adicionando z-index
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 5,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default LogoAnimation;
