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
    <article className=" pt-11">
      <img src={aspas} alt="aspas" width={66} height={46} />
      <p>{testemonial}</p>
      <img src={src} alt={`depoimento de ${nome}`} width="66" height="46" />
      <img src={estrelas} alt="estrelas" width="66" height="62" />
      <p className=" px-10">{nome}</p>
      <p>{cargo}</p>
    </article>
  );
}
