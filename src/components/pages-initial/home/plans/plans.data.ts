import {
  IconSchool,
  IconSparkles,
  IconBuildingCommunity,
} from "@tabler/icons-react";

import type { PricingPlan } from "./plans.type";

export const plans: PricingPlan[] = [
  {
    name: "Gratuito",
    price: "0",
    description: "Comece a explorar novas formas de aprender.",
    features: [
      "Acesso limitado a atividades educativas.",
      "Recursos básicos de aprendizagem.",
      "Experimentação da plataforma.",
    ],
    featured: false,
    availability: "Acesso em breve",
    icon: IconSchool,
  },
  {
    name: "Premium",
    price: "29,90",
    period: "/mês",
    description: "Uma experiência completa para evoluir no próprio ritmo.",
    features: [
      "Maior variedade de atividades educativas.",
      "Histórico de progresso da criança.",
      "Acompanhamento da aprendizagem.",
      "Recursos adicionais de personalização.",
    ],
    featured: true,
    availability: "Assinatura em breve",
    icon: IconSparkles,
  },
  {
    name: "Escolas e Clínicas",
    price: "199",
    period: "/mês",
    description: "Mais possibilidades para acompanhar várias jornadas.",
    features: [
      "Recursos para uso institucional.",
      "Acompanhamento de múltiplos usuários.",
      "Organização do progresso dos alunos.",
      "Ferramentas de gestão institucional.",
    ],
    featured: false,
    availability: "Contratação em breve",
    icon: IconBuildingCommunity,
  },
];
