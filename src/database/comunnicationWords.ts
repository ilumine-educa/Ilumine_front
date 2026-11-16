export type WordCategory = "pessoas" | "acoes" | "objetos";

export type CommunicationWord = {
  id: number;
  label: string;
  emoji: string;
  category: WordCategory;
};

export const wordCategories = [
  { id: "pessoas", label: "Pessoas", emoji: "👦" },
  { id: "acoes", label: "Ações", emoji: "🏃" },
  { id: "objetos", label: "Objetos", emoji: "🧸" },
] as const;

export const communicationWords: CommunicationWord[] = [
  // Pessoas
  { id: 1, label: "Eu", emoji: "🙋", category: "pessoas" },
  { id: 2, label: "Mamãe", emoji: "👩", category: "pessoas" },
  { id: 3, label: "Papai", emoji: "👨", category: "pessoas" },
  { id: 4, label: "Amigo", emoji: "🧒", category: "pessoas" },

  // Ações
  { id: 5, label: "Quero", emoji: "🙌", category: "acoes" },
  { id: 6, label: "Gosto", emoji: "❤️", category: "acoes" },
  { id: 7, label: "Comer", emoji: "😋", category: "acoes" },
  { id: 8, label: "Brincar", emoji: "🎮", category: "acoes" },
  { id: 9, label: "Beber", emoji: "🥤", category: "acoes" },

  // Objetos
  { id: 10, label: "Maçã", emoji: "🍎", category: "objetos" },
  { id: 11, label: "Água", emoji: "💧", category: "objetos" },
  { id: 12, label: "Bola", emoji: "⚽", category: "objetos" },
  { id: 13, label: "Brinquedo", emoji: "🧸", category: "objetos" },
  { id: 14, label: "Comida", emoji: "🍽️", category: "objetos" },
];