import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface SpeedometerProps {
  value: number;
}

const Speedometer = ({ value }: SpeedometerProps) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((rotation + 180) % 360);
    }, 500);

    return () => clearInterval(interval);
  }, [rotation]);

  const pointerRotation = Math.min(Math.max(value, 0), 180) * 2;

  return (
    <svg viewBox="0 0 400 400">
      <g transform="translate(200,200)">
        {/* Background circle */}
        <circle r="170" fill="#f1f1f1" />

        {/* Speedometer arc */}
        <motion.path
          d="
            M 0 -170
            A 170 170 0 0 1 0 170
            A 170 170 0 0 1 0 -170
          "
          fill="none"
          stroke="#098A5B"
          strokeWidth="30"
          strokeDasharray={`1130 1062`}
          strokeDashoffset="-69"
          initial={{ strokeDashoffset: -69 }}
          animate={{ strokeDashoffset: 176 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        />

        {/* Pointer */}
        <g transform={`rotate(${pointerRotation}, 0, 0)`}>
          <rect x="-5" y="-150" width="10" height="150" fill="#098A5B" />
        </g>

        {/* Center circle */}
        <circle r="10" fill="#098A5B" />
      </g>
    </svg>
  );
};

export default Speedometer;
