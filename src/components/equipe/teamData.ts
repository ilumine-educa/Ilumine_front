export type TeamMember = {
  id: string;
  name: string;
  roles: string[];
  description?: string;
  photo?: { src: string; alt: string };
  github?: string;
  linkedin?: string;
};

// Para adicionar uma foto, salve-a em public/images/equipe e preencha photo
// no integrante: { src: "/images/equipe/arquivo.jpg", alt: "Nome do integrante" }.
// Sem photo, o card exibe automaticamente as iniciais do nome.
// Links sociais: preencha com a URL completa do perfil real ou deixe ausentes.
export const teamMembers: TeamMember[] = [
  {
    id: "caua-gabriel",
    name: "Cauã Gabriel",
    roles: ["Product Owner (PO)", "Desenvolvedor Back-end"],
  },
  {
    id: "caio-lima",
    name: "Caio Lima",
    roles: ["Scrum Master", "Desenvolvedor Front-end"],
    photo: { src: "/images/equipe/Caio.jpg", alt: "Caio Lima" },
  },
  {
    id: "bruno-henrique",
    name: "Bruno Henrique",
    roles: ["Marketing", "Desenvolvedor Front-end"],
    photo: { src: "/images/equipe/Bruno.png", alt: "Bruno Henrique" },
  },
  {
    id: "ana-paula",
    name: "Ana Paula",
    roles: ["Documentarista", "Desenvolvedora Back-end"],
  },
  {
    id: "miguel-campos",
    name: "Miguel Campos",
    roles: ["Marketing", "Desenvolvedor Back-end"],
  },
  {
    id: "caua-vasco",
    name: "Cauã Vasco",
    roles: ["Desenvolvedor Back-end"],
  },
];

// Preencha src e alt quando a fotografia coletiva estiver disponível.
export const teamPhoto: { src?: string; alt?: string } = {};
