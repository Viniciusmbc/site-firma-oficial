import {
  telephoneIcon,
  emailIcon,
  pinLocationIcon,
  agendaIcon,
} from "~/components/common/icons";

interface Contact {
  id: number;
  icon: React.ReactNode;
  text: string;
}

export const contact_data: Contact[] = [
  {
    id: 1,
    icon: telephoneIcon,
    text: "(55) 99189-7784",
  },
  {
    id: 2,
    icon: emailIcon,
    text: "otc@otcdeveloper.com",
  },
  {
    id: 3,
    icon: pinLocationIcon,
    text: "Santa Maria, RS, Brasil",
  },
  {
    id: 4,
    icon: agendaIcon,
    text: "Seg-Sab 08:00 - 18:30",
  },
];

interface OurServices {
  id: number;
  text: string;
}

export const our_services: OurServices[] = [
  {
    id: 1,
    text: "Redação e conteúdo",
  },
  { id: 2, text: "Sites para advogados" },
  { id: 3, text: "Sites para profissionais da saúde" },
  { id: 4, text: "Nossos Trabalhos" },
];

export const about_us: OurServices[] = [
  {
    id: 1,
    text: "Sobre nós",
  },
  { id: 2, text: "Blog" },
  { id: 3, text: "Orçamento" },
  { id: 4, text: "Fale conosco" },
];
