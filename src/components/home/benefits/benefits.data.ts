import {
  IconBrain,
  IconChartLine,
  IconPuzzle,
} from "@tabler/icons-react";

import type { Benefit } from "./benefits.types";

export const benefits: Benefit[] = [
  {
    icon: IconBrain,
    title: "Aprendizado personalizado",
    description:
      "Cada criança aprende de uma maneira diferente. Por isso, adaptamos as experiências de aprendizagem às suas necessidades e ao seu ritmo.",
    color: "bg-primary-light text-primary",
  },
  {
    icon: IconChartLine,
    title: "Acompanhamento da evolução",
    description:
      "Acompanhe o desenvolvimento da criança, identifique conquistas e descubra quais habilidades precisam de mais atenção.",
    color: "bg-secondary-light text-secondary",
  },
  {
    icon: IconPuzzle,
    title: "Atividades interativas",
    description:
      "Transformamos o aprendizado em experiências mais divertidas, com atividades e jogos que estimulam o interesse e a participação.",
    color: "bg-primary-light text-primary",
  },
];