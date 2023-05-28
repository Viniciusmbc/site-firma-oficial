import { useInView } from "framer-motion";
import React, { useRef } from "react";

interface HighlightWrapperProps {
  children: React.ReactNode;
  classname?: string;
}

const HighlightWrapper: React.FC<HighlightWrapperProps> = ({
  children,
  classname,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      id="highlight-wrapper"
      className={`${isInView ? "animate-highlight" : ""} ${classname}`}
    >
      {children}
    </div>
  );
};

export default HighlightWrapper;
