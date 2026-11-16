import type { TablerIcon } from "@tabler/icons-react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export type TeamMember = {
  id: string;
  name: string;
  roles: string[];
  description?: string;
  photo?: { src: string; alt: string };
  socialLinks?: {
    label: string;
    href?: string;
    icon: TablerIcon;
  }[];
};

export type TeamPhotoProps = {
  src?: string;
  alt?: string;
};

export const teamPhoto: TeamPhotoProps[] = [
  {
    src: "/images/equipe/BrunoHenrique.png",
    alt: "Equipe reunida",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "caua-gabriel",
    name: "Cauã Gabriel",
    roles: ["Product Owner (PO)", "Desenvolvedor Back-end"],
    photo: {
      src: "/images/equipe/CauaGabriel.jpeg",
      alt: "Cauã Gabriel",
    },
    socialLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/cau%C3%A3-gabriel-782651428/",
        icon: IconBrandLinkedin,
      },
    ],
  },
  {
    id: "caio-lima",
    name: "Caio Lima",
    roles: ["Scrum Master", "Desenvolvedor Front-end"],
    photo: {
      src: "/images/equipe/CaioLima.jpg",
      alt: "Caio Lima",
    },
    socialLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/caio-de-lima-oliveira/",
        icon: IconBrandLinkedin,
      },
    ],
  },
  {
    id: "bruno-henrique",
    name: "Bruno Henrique",
    roles: ["Marketing", "Desenvolvedor Front-end"],
    photo: {
      src: "/images/equipe/BrunoHenrique.png",
      alt: "Bruno Henrique",
    },
    socialLinks: [
      {
        label: "GitHub",
        href: "https://github.com/BrunoH4ds",
        icon: IconBrandGithub,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/bruno-hads/",
        icon: IconBrandLinkedin,
      },
      // Exemplo para adicionar outras redes:
      // {
      //   label: "Instagram",
      //   href: "https://instagram.com/usuario",
      //   icon: IconBrandInstagram,
      // },
      // {
      //   label: "Portfólio",
      //   href: "https://meusite.com",
      //   icon: IconWorldWww,
      // },
    ],
  },
  {
    id: "ana-paula",
    name: "Ana Paula",
    roles: ["Documentarista", "Desenvolvedora Back-end"],
    photo: {
      src: "/images/equipe/AnaPaula.jpeg",
      alt: "Ana Paula",
    },
    socialLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ana-paula-santos-da-silva-914816416/",
        icon: IconBrandLinkedin,
      },
    ],
  },
  {
    id: "miguel-campos",
    name: "Miguel Campos",
    roles: ["Marketing", "Desenvolvedor Back-end"],
    photo: {
      src: "/images/equipe/MiguelCampos.jpeg",
      alt: "Miguel Campos",
    },
    socialLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/miguel-santos-campos/",
        icon: IconBrandLinkedin,
      },
    ],
  },
  {
    id: "caua-bissoli",
    name: "Cauã Bissoli",
    roles: ["Desenvolvedor Back-end"],
    photo: {
      src: "/images/equipe/CauaBissoli.jpeg",
      alt: "Cauã Bissoli",
    },
  },
];
