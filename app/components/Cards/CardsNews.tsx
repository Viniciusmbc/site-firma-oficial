interface CardsNewsProps {
  src: string;
  title: string;
  description: string;
}

export default function CardsNews({ src, title, description }: CardsNewsProps) {
  return (
    <article>
      <img src={src} alt="Imagem da notícia" width={463} height={378} />
      <p>{title}</p>
      <p>{description}</p>
    </article>
  );
}
