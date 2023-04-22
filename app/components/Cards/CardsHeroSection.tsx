import PaperPlane from "../PaperPlaneAnimation/PaperPlane";

export default function CardsHeroSection({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: any;
}) {
  return (
    <article className=" bg-[#313131] max-w-[294px] w-full mb-8">
      <PaperPlane />
      <div className=" border-b border-[#098A5B] pb-3 pl-4  mt-6">
        <strong className=" text-xl uppercase">{title}</strong>
      </div>

      <p className=" mt-5 pl-4 pb-7">{description}</p>
    </article>
  );
}
