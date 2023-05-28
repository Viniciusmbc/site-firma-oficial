// Images
import imagemnews from "public/news/imagenews2.png";
import imagemwebsitespeed from "public/news/imagemwebsitefast.webp";

interface TextosBlogProps {
  src: string | any;
  title: string;
  description: string;
}

export const textosblog: TextosBlogProps[] = [
  {
    src: imagemwebsitespeed,
    title: "Por que ter um site rápido é importante para o seu negócio?",
    description:
      "Leia nesse artigo a importância de ter um site rápido e como isso pode impactar no seu negócio.",
  },
  {
    src: imagemnews,
    title: "Por que ter um site rápido é importante para o seu negócio?",
    description:
      "Leia nesse artigo a importância de ter um site rápido e como isso pode impactar no seu negócio.",
  },
  {
    src: imagemnews,
    title: "Por que ter um site rápido é importante para o seu negócio?",
    description:
      "Leia nesse artigo a importância de ter um site rápido e como isso pode impactar no seu negócio.",
  },
];
