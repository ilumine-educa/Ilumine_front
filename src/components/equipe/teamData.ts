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
    linkedin: "https://www.linkedin.com/in/cau%C3%A3-gabriel-782651428/",
    name: "Cauã Gabriel",
    roles: ["Product Owner (PO)", "Desenvolvedor Back-end"],
    photo: { src: "/images/equipe/CauaGabriel.jpeg", alt: "Cauã Gabriel" },
  },
  {
    id: "caio-lima",
    linkedin: "https://www.linkedin.com/in/caio-de-lima-oliveira/",
    name: "Caio Lima",
    roles: ["Scrum Master", "Desenvolvedor Front-end"],
    photo: { src: "/images/equipe/CaioLima.jpg", alt: "Caio Lima" },
  },
  {
    id: "bruno-henrique",
    linkedin: "https://www.linkedin.com/in/bruno-hads/",
    name: "Bruno Henrique",
    roles: ["Marketing", "Desenvolvedor Front-end"],
    photo: { src: "/images/equipe/BrunoHenrique.png", alt: "Bruno Henrique" },
  },
  {
    id: "ana-paula",
    linkedin: "https://www.linkedin.com/in/ana-paula-santos-da-silva-914816416/",
    name: "Ana Paula",
    roles: ["Documentarista", "Desenvolvedora Back-end"],
    photo: { src: "/images/equipe/AnaPaula.jpeg", alt: "Ana Paula" },
  },
  {
    id: "miguel-campos",
    linkedin: "https://www.linkedin.com/in/miguel-santos-campos/",
    name: "Miguel Campos",
    roles: ["Marketing", "Desenvolvedor Back-end"],
    photo: { src: "/images/equipe/MiguelCampos.jpeg", alt: "Miguel Campos" },
  },
  {
    id: "caua-bissoli",
    name: "Cauã Bissoli",
    roles: ["Desenvolvedor Back-end"],
    photo: { src: "/images/equipe/CauaBissoli.jpeg", alt: "Cauã Bissoli" },
  },
];

// Preencha src e alt quando a fotografia coletiva estiver disponível.
export const teamPhoto: { src?: string; alt?: string } = {};
