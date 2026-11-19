export type Subject = "portugues" | "matematica";
export type Picture = "casa" | "bola" | "pato" | "sapato";
export type Challenge =
  | { kind: "word"; picture: Picture; syllables: string[]; tiles: string[] }
  | { kind: "count"; count: number; options: number[] };

type Phase = { label: string; challenges: Challenge[] };
type Discipline = { name: string; game: string; units: [string, string]; phases: Phase[] };

function count(value: number): Challenge {
  const start = Math.min(8, Math.max(1, value - (value % 3)));
  return { kind: "count", count: value, options: [start, start + 1, start + 2] };
}

export const disciplines: Record<Subject, Discipline> = {
  portugues: {
    name: "Português", game: "Monte a Palavra", units: ["Primeiras sílabas", "Mais combinações"],
    phases: [
      { label: "A casa", challenges: [{ kind: "word", picture: "casa", syllables: ["CA", "SA"], tiles: ["SA", "CA"] }] },
      { label: "A bola", challenges: [{ kind: "word", picture: "bola", syllables: ["BO", "LA"], tiles: ["LA", "BO", "CA"] }] },
      { label: "O pato", challenges: [{ kind: "word", picture: "pato", syllables: ["PA", "TO"], tiles: ["TO", "BO", "PA"] }] },
      { label: "Três sílabas", challenges: [{ kind: "word", picture: "sapato", syllables: ["SA", "PA", "TO"], tiles: ["TO", "SA", "LA", "PA"] }] },
    ],
  },
  matematica: {
    name: "Matemática", game: "Conte e Descubra", units: ["Até cinco", "Até dez"],
    phases: [
      { label: "De 1 a 3", challenges: [1, 2, 3].map(count) },
      { label: "De 4 a 5", challenges: [4, 5].map(count) },
      { label: "De 6 a 8", challenges: [6, 7, 8].map(count) },
      { label: "De 9 a 10", challenges: [9, 10].map(count) },
    ],
  },
};

export function isSubject(value: string): value is Subject {
  return value === "portugues" || value === "matematica";
}

export function solution(challenge: Challenge) {
  return challenge.kind === "word" ? challenge.syllables.join("") : String(challenge.count);
}
