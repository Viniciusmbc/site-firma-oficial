import { motion } from "framer-motion";

export const Planet = () => {
  return (
    <motion.div
      className="w-80 h-80 rounded-full bg-center bg-no-repeat bg-cover relative shadow-2xl"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/deaejawfj/image/upload/v1683028964/LogoOtc_nrqdvq.webp')`,
      }}
      animate={{ rotate: 200 }}
      transition={{ duration: 10, loop: Infinity, ease: "linear" }}
    >
      <Moon />
    </motion.div>
  );
};
const Moon = () => {
  return (
    <motion.div
      className="w-16 h-16 rounded-full bg-center bg-no-repeat bg-cover absolute top-1/2 left-0 transform -translate-y-1/2 shadow-md"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/deaejawfj/image/upload/v1683030473/lua1_rmprxg.webp')`,
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 5, loop: Infinity, ease: "linear" }}
      variants={{
        orbit: {
          translateX: ["100px", "0px", "100px"],
          left: ["-11em", "25em", "-11em"],
          zIndex: [1, -1, 1],
          transition: {
            duration: 20,
            ease: "easeInOut",
            times: [0, 0.49, 0.5, 0.99, 1],
          },
        },
      }}
    ></motion.div>
  );
};
