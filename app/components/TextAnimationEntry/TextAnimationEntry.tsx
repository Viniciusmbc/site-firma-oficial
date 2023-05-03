import { useRef } from "react";
import { useInView } from "framer-motion";

type TextAnimationEntryProps = {
  title: string;
  description: string;
};

const TextAnimationEntry = ({
  title,
  description,
}: TextAnimationEntryProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      {" "}
      <h2
        className=" -translate-x-28  text-white text-3xl flex items-center "
        style={{
          transform: isInView ? "none" : "translateX(-500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {" "}
        <span className=" border border-[#098A5B] w-16 h-0 mr-4"></span>
        {title}
      </h2>
      <p
        className=" text-[#098A5B] mb-10 mt-2  uppercase  font-semibold"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default TextAnimationEntry;
