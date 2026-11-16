import { IconMoodKid, IconSchool, IconBulb, IconUsers } from "@tabler/icons-react";

import type { Impact } from "./impact.types";

export const impacts: Impact[] = [
  {
    number: "01",
    audience: "Para a criança",
    title: "Aprender no seu próprio ritmo.",
    description:
      "Atividades interativas que respeitam as particularidades de cada criança, tornando a aprendizagem mais leve, acessível e envolvente.",
    icon: IconMoodKid,
    color: "bg-primary-light text-primary",
    decoration: "bg-primary/10",
  },
  {
    number: "02",
    audience: "Para o educador",
    title: "Entender para ensinar melhor.",
    description:
      "Acompanhe o desenvolvimento dos alunos, identifique necessidades e tenha mais clareza sobre cada jornada de aprendizagem.",
    icon: IconSchool,
    color: "bg-secondary-light text-secondary",
    decoration: "bg-secondary/10",
  },
  {
    number: "03",
    audience: "Para os responsáveis",
    title: "Acompanhar cada conquista de perto.",
    description:
      "Acompanhe a evolução da criança, conheça suas necessidades e participe de uma jornada de aprendizagem mais inclusiva e acolhedora.",
    icon: IconUsers,
    color: "bg-secondary-light text-secondary",
    decoration: "bg-secondary/10",
  },

  {
    number: "04",
    audience: "Para a aprendizagem",
    title: "Valorizar cada pequena conquista.",
    description:
      "Uma abordagem que reconhece diferentes formas de aprender e transforma cada avanço em uma oportunidade de evolução.",
    icon: IconBulb,
    color: "bg-primary-light text-primary",
    decoration: "bg-primary/10",
  },
];
