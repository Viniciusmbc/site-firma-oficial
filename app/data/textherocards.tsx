import Gauge from "~/components/Gauge/Gauge";
import PaperPlaneAnimation from "~/components/PaperPlaneAnimation/PaperPlaneAnimation";

import PencilWritingAnimation from "~/components/Pencil/PencilWritingAnimation";

interface Textherocard {
  icon: any;
  title?: string;
  description: string;
}

export const textherocards: Textherocard[] = [
  {
    icon: <PaperPlaneAnimation />,
    title: "Do zero ao sucesso online.",
    description:
      "Nós estamos prontos para transformar sua ideia em realidade, com um serviço completo e personalizado que atende às suas necessidades.",
  },
  {
    icon: <Gauge />,
    title: "Sites Rápidos",
    description:
      "Melhore a satisfação do usuário e aumente a sua taxa de conversão: visitantes tendem a permanecer por mais tempo e navegar por mais páginas em um site que é rápido e fácil de usar.",
  },
  {
    icon: <PencilWritingAnimation />,
    description:
      "Fornecemos soluções de criação de conteúdo que não apenas atrairão mais acessos, mas também manterão o público envolvido e interessado em seu negócio.",
  },
];
