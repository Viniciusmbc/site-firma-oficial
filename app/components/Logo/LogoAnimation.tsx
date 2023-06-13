import brainImage from "public/logo/LogoOtc.png";
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
      <motion.div
        className="absolute top-0 left-0 w-[20px] bg-white shadow-inherit  shadow-lg  rounded-full h-[20px]"
        animate={{
          x: ["100%", "50%", "40%", "-40%"],
          y: ["300%", "-35%", "-50%", "30%"],
          z: [0, 20, 100, 0],
          scaleY: [2, 1, 1, 2],
          scaleX: [2, 1, 1, 2],
          zIndex: 30,
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 9,
          ease: "linear",
        }}
      />
      <motion.img
        src={lua2}
        alt="Moon"
        className="absolute top-0 left-0 w-full h-full"
        animate={{
          x: ["20%", "30%", "0%", "-60%"],
          y: ["0%", "0%", "0%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 5,
          ease: "linear",
          delay: 1,
        }}
      />
    </div>
  );
};

export default LogoAnimation;
