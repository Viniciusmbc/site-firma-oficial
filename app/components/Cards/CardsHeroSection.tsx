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
      <div className=" border-b border-[#098A5B] pb-3 pl-4">
        <strong className=" text-xl uppercase">{title}</strong>
      </div>

      <p className=" mt-4 px-4 pb-7 flex items-center">{description}</p>
    </article>
  );
}
