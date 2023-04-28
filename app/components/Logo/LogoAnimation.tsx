import { motion } from "framer-motion";
import planeta from "public/logo/planetImage.png";
import lua1 from "public/logo/lua1.png";
import lua2 from "public/logo/lua2.png";
import lua3 from "public/logo/lua3.png";
import lua4 from "public/logo/lua3.png";
import lua5 from "public/logo/lua3.png";

const Planet = () => {
  return (
    <div className="flex justify-center items-center ">
      <motion.div
        className="relative  w-52 h-52 rounded-full bg-gradient-to from-yellow-400 to-red-500 flex justify-center items-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <img src={planeta} alt="Planeta" className="w-full" />
        <motion.img
          src={lua1}
          alt="Lua 1"
          className="absolute top-1/2 left-1/2 w-24 h-24"
          animate={{
            y: [-100, 100, -100],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.img
          src={lua2}
          alt="Lua 2"
          className="absolute top-1/2 left-1/2 w-20 h-20 -z-10"
          animate={{
            y: [100, -100, 100],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.img
          src={lua3}
          alt="Lua 3"
          className="absolute top-1/2 left-1/2 w-20 h-20 -z-20"
          animate={{
            y: [-120, 120, -120],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.img
          src={lua4}
          alt="Lua 4"
          className="absolute top-1/2 left-1/2 w-20 h-20 -z-20"
          animate={{
            y: [150, -150, 150],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.img
          src={lua5}
          alt="Lua 5"
          className="absolute top-1/2 left-1/2 w-12 h-12 -z-20"
          animate={{
            y: [-180, 180, -180],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Planet;
