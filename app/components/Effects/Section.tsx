import { useRef } from "react";
import { useInView } from "framer-motion";

type TextAnimationEntryProps = {
  children: React.ReactNode;
};

const TextAnimationEntry = ({ children }: TextAnimationEntryProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <h2
        className=" -translate-x-28"
        style={{
          transform: isInView ? "none" : "translateX(-500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </h2>
    </div>
  );
};

export default TextAnimationEntry;
