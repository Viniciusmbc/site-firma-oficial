import pencilImage from "public/pencilimg.png";

export default function CardWrittingEffect() {
  return (
    <article className=" bg-[#313131] max-w-[294px] w-full mb-8">
      <div className=" relative border-b border-[#098A5B] pb-3 pl-4  mt-6">
        <strong className=" animate-writing absolute w-[25rem]  text-xl uppercase">
          Redação e Conteúdo
        </strong>
        <img
          src={pencilImage}
          alt="pencil"
          width="47"
          height="44"
          className=" relative w-[47px] h-[47px] top-0 bottom-[0rem] left-[0rem]  animate-write"
        />
      </div>
      <p className=" mt-5 pl-4 pb-7">
        {" "}
        Fornecemos soluções de criação de conteúdo que não apenas atrairão mais
        acessos, mas também manterão o público envolvido e interessado em seu
        negócio.
      </p>
    </article>
  );
}
