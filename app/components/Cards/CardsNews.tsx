import { Link } from "@remix-run/react";

interface CardsNewsProps {
  src: string | any;
  title: string;
  description: string;
}

export default function CardsNews({ src, title, description }: CardsNewsProps) {
  return (
    <article className=" w-96 h-fit max-w-full">
      <img
        src={src}
        alt={`Imagem sobre a notícia ${title}`}
        width={463}
        height={378}
        className=" max-w-full max-h-full object-cover"
      />
      <div className=" border border-green-950">
        <p className=" mt-6 mb-9">{title}</p>
        <p className=" my-10">{description}</p>
        <Link className=" border border-green-950 py-3 px-4" to="/news">
          Ver mais
        </Link>
      </div>
    </article>
  );
}
