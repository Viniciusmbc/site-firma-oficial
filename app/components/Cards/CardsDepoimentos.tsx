import aspas from "public/aspas.png";
import estrelas from "public/estrelas.png";

interface CardsDepoimentosProps {
  src: string;
  testemonial: string;
  nome: string;
  cargo: string;
}

export default function CardsDepoimentos({
  src,
  testemonial,
  nome,
  cargo,
}: CardsDepoimentosProps) {
  return (
    <div>
      <article className=" pt-11 bg-[#101017] border border-[#777777] h-[335px]  w-full max-w-xs">
        <img
          src={aspas}
          alt="aspas"
          width={66}
          height={46}
          className=" mx-auto"
        />
        <p className=" mt-16 text-center">{testemonial}</p>
        <img
          src={estrelas}
          alt="estrelas"
          width="66"
          height="62"
          className=" mx-auto mt-10"
        />
      </article>
      <img
        src={src}
        alt={`depoimento de ${nome}`}
        width="66"
        height="46"
        className=" mx-auto -mt-8"
      />
      <p className=" px-10 text-center font-bold ">{nome}</p>
      <p className=" px-10 text-center">{cargo}</p>
    </div>
  );
}
