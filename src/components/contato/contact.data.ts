
import {
  IconMail,
  IconMessageCircle,
  IconUsers,
} from "@tabler/icons-react";

import type { ContactOption } from "./contact.types";

export const contactEmail = "contato@seudominio.com";

export const contactOptions: ContactOption[] = [
  {
    icon: IconMail,
    title: "Contato geral",
    description: "Dúvidas, informações e outras solicitações.",
    action: "Enviar e-mail",
    href: `mailto:${contactEmail}`,
    color: "bg-primary-light text-primary",
  },
  {
    icon: IconMessageCircle,
    title: "Suporte",
    description: "Precisa de ajuda com a plataforma? Fale com a gente.",
    action: "Solicitar suporte",
    href: "mailto:suporte@seudominio.com",
    color: "bg-secondary-light text-secondary",
  },
  {
    icon: IconUsers,
    title: "Parcerias",
    description: "Vamos construir novas possibilidades juntos?",
    action: "Seja um parceiro",
    href: "mailto:parcerias@seudominio.com",
    color: "bg-primary-light text-primary",
  },
];
