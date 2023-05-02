import { motion } from "framer-motion";

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

  return (
    <motion.article
      className=" text-white bg-[#313131]  border-b-4 border-[#D9D9D9] w-full max-w-[341px]"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <img
        src={src}
        alt={description}
        width="47"
        height="44"
        className=" mt-12 mb-10 ml-7"
      />
      <strong className=" text-3xl ml-7 mt-10 mb-5 ">{title}</strong>
      <p className=" mb-14 ml-7 mt-5">{description}</p>
    </motion.article>
  );
}
