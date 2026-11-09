
export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "responsavel" | "educador";
};

export const users: User[] = [
  {
    id: 1,
    name: "Administrador Ilumine",
    email: "admin@ilumine.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: 2,
    name: "Maria Silva",
    email: "maria@email.com",
    password: "maria123",
    role: "responsavel",
  },
  {
    id: 3,
    name: "João Santos",
    email: "joao@email.com",
    password: "joao123",
    role: "educador",
  },
  {
    id: 4,
    name: "Ana Oliveira",
    email: "ana@email.com",
    password: "ana123",
    role: "responsavel",
  },
];

export function findUser(email: string) {
  return users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );
}
