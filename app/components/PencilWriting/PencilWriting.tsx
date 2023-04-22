import { motion } from "framer-motion";

const PencilWriting = () => {
  return (
    <svg width="400" height="400" viewBox="0 0 400 400">
      <motion.path
        d="M 100 100 L 300 300"
        stroke="#000"
        strokeWidth="5"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
    </svg>
  );
};

export default PencilWriting;
