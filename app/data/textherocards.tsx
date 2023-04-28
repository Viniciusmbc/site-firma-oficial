import mediapaintimg from "public/mediapaintimg.png";
import PaperPlaneAnimation from "~/components/PaperPlaneAnimation/PaperPlaneAnimation";
import Speedometer from "~/components/SpeedIcon/SpeedIcon";
import Velocimeter from "~/components/SpeedIcon/SpeedIcon";

import SpeedIcon from "~/components/SpeedIcon/SpeedIcon";

interface Textherocard {
  icon: any;
  title: string;
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
    icon: <Speedometer value={180} />,
    title: "Sem mensalidade",
    description:
      "Aqui você só paga uma vez: oferecemos, como bônus, a manutenção e o relatório mensal de desempenho do seu site.",
  },
  {
    icon: <img src={mediapaintimg} width={100} height={100} alt="imagem" />,
    title: "Redação",
    description:
      "Fornecemos soluções de criação de conteúdo que não apenas atrairão mais acessos, mas também manterão o público envolvido e interessado em seu negócio. ",
  },
];
