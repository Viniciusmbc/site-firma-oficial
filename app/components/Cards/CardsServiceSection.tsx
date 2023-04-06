interface CardsServiceSectionProps {
  src: string;
  title: string;
  description: string;
}

export default function CardsServiceSection({
  src,
  title,
  description,
}: CardsServiceSectionProps) {
  return (
    <article className=" text-white bg-[#313131]  border-b-4 border-[#D9D9D9] w-full max-w-[341px]">
      <img
        src={src}
        alt={description}
        width="47"
        height="44"
        className=" mt-12 mb-10 ml-7"
      />
      <strong className=" text-3xl ml-7 mt-10 mb-5 ">{title}</strong>
      <p className=" mb-14 ml-7 mt-5">{description}</p>
    </article>
  );
}
