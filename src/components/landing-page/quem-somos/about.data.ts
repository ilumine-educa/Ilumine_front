
import {
  IconBrain,
  IconHeartHandshake,
  IconTargetArrow,
  IconEye,
  IconPuzzle,
  IconBulb,
  IconHeart,
} from "@tabler/icons-react";

import type { AboutValue, AboutPillar, AboutPurposes  } from "./about.types";

export const values: AboutValue[] = [
  {
    icon: IconHeart,
    title: "Inclusão",
    description:
      "Acreditamos que todas as crianças merecem oportunidades de aprendizagem, respeitando suas particularidades.",
    color: "bg-primary-light text-primary",
  },
  {
    icon: IconBrain,
    title: "Personalização",
    description:
      "Cada criança tem seu próprio ritmo. Por isso, valorizamos experiências que consideram suas necessidades.",
    color: "bg-secondary-light text-secondary",
  },
  {
    icon: IconBulb,
    title: "Inovação",
    description:
      "Utilizamos a tecnologia como ferramenta para criar novas possibilidades dentro da educação.",
    color: "bg-primary-light text-primary",
  },
  {
    icon: IconHeartHandshake,
    title: "Acolhimento",
    description:
      "Valorizamos o papel de famílias e educadores na construção de uma jornada de aprendizagem positiva.",
    color: "bg-secondary-light text-secondary",
  },
];

export const pillars: AboutPillar[] = [
  {
    number: "01",
    title: "Entender",
    description:
      "Reconhecer que cada criança possui necessidades, habilidades e formas próprias de aprender.",
    icon: IconEye,
  },
  {
    number: "02",
    title: "Adaptar",
    description:
      "Criar experiências de aprendizagem mais acessíveis, respeitando o ritmo de cada criança.",
    icon: IconPuzzle,
  },
  {
    number: "03",
    title: "Evoluir",
    description:
      "Acompanhar conquistas e incentivar o desenvolvimento contínuo de cada aluno.",
    icon: IconTargetArrow,
  },
];

export const purposes: AboutPurposes[] = [
  {
    title: "Nossa missão",
    description:
      "Promover uma aprendizagem mais inclusiva e personalizada por meio da tecnologia, respeitando as individualidades e potencialidades de cada criança.",
    icon: IconTargetArrow,
    variant: "primary",
  },
  {
    title: "Nossa visão",
    description:
      "Contribuir para um futuro em que as diferenças sejam compreendidas e respeitadas, e cada criança tenha oportunidades reais de desenvolver seu potencial.",
    icon: IconEye,
    variant: "secondary",
  },
];
