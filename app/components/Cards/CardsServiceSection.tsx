import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface CardsServiceSectionProps {
  src: string;
  title: string;
  description: string;
}

export default function CardsServiceSection({
  src,
  title,
  description,
  index,
}: CardsServiceSectionProps & { index: number }) {
  const delay = index * 0.5;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.article
      ref={ref}
      className=" text-white bg-[#313131]  border-b-4 border-[#D9D9D9] w-full max-w-[341px]"
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <img
        src={src}
        className=" mt-12 mb-10 ml-7"
        alt="Imagem dos Serviços do site da OTC Soluções em TI"
      />
      <strong className=" text-3xl mx-auto p-4 flex  mt-10 mb-5 max-w-full  ">
        {title}
      </strong>
      <p className=" mb-14 p-4  mt-5">{description}</p>
    </motion.article>
  );
}
