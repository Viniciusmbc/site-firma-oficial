export default function CardsHeroSection({
  title,
  description,
  icon,
}: {
  title?: string;
  description: string;
  icon: JSX.Element;
}) {
  return (
    <article className=" border border-[#098A5B] bg-[#313131] max-w-[294px] w-full mb-8">
      {icon}
      <div className=" pb-3 pl-4">
        <strong className=" text-xl uppercase">{title}</strong>
        <span className=" w-16 h-1 bg-[#098A5B] block"></span>
      </div>

      <p className=" mt-4 px-4 pb-7 flex items-center">{description}</p>
    </article>
  );
}
