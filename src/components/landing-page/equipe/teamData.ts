import type { StaticImageData } from "next/image";
import equipeProa from "@/public/images/equipe/EquipeProa.jpeg";
import cauaGabriel from "@/public/images/equipe/CauaGabriel.jpeg";
import caioLima from "@/public/images/equipe/CaioLima.jpeg";
import brunoHenrique from "@/public/images/equipe/BrunoHenrique.png";
import anaPaula from "@/public/images/equipe/AnaPaula.jpeg";
import miguelCampos from "@/public/images/equipe/MiguelCampos.jpeg";
import cauaBissoli from "@/public/images/equipe/CauaBissoli.jpeg";
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
  photo?: { src: StaticImageData; alt: string };
  socialLinks?: {
    label: string;
    href?: string;
    icon: TablerIcon;
  }[];
};

export const teamPhoto = {
  src: equipeProa,
  alt: "Integrantes da Ilumine.Educa reunidos no PROA",
};

export const teamMembers: TeamMember[] = [
  {
    id: "caua-gabriel",
    name: "Cauã Gabriel",
    roles: ["Product Owner (PO)", "Desenvolvedor Back-end"],
    photo: {
      src: cauaGabriel,
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
      src: caioLima,
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
      src: brunoHenrique,
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
      src: anaPaula,
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
      src: miguelCampos,
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
      src: cauaBissoli,
      alt: "Cauã Bissoli",
    },
  },
];
