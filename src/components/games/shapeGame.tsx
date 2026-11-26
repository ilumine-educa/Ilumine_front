"use client";

import { useState } from "react";
import { IconCircle, IconSquare, IconTriangle } from "@tabler/icons-react";
import { button, panel } from "../area-logged/escolher-jogo/childUi";

const shapes = [
  { name: "Círculo", icon: IconCircle },
  { name: "Quadrado", icon: IconSquare },
  { name: "Triângulo", icon: IconTriangle },
];
const rounds = [1, 2, 0];

export default function ShapeGame() {
  const [round, setRound] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const finished = round === rounds.length;
  const target = shapes[rounds[round]];
  const matched = choice === rounds[round];

  function advance() {
    setChoice(null);
    setRound(finished ? 0 : round + 1);
  }

  return <section aria-label="Jogo das formas" className={panel + " mx-auto max-w-2xl text-center"}>
    {finished ? <h2 className="text-3xl" role="status">Você encontrou as três formas!</h2> : <>
      <p className="font-semibold" aria-live="polite">Peça {round + 1} de {rounds.length}</p>
      <div className="mx-auto my-5 grid size-28 place-items-center rounded-3xl bg-primary-light/40">
        <target.icon role="img" aria-label={`Peça: ${target.name}`} className="size-16 fill-primary text-primary" />
      </div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        {shapes.map(({ name, icon: Icon }, index) =>
          <button key={name} type="button" disabled={matched} onClick={() => setChoice(index)}
            className="grid min-w-20 place-items-center gap-2 rounded-2xl border-2 border-border px-3 py-4 enabled:hover:border-primary focus-visible:outline-offset-4">
            <Icon aria-hidden className="size-10" />{name}
          </button>)}
      </div>
      <p role="status" className="mt-4 min-h-7">
        {choice !== null && (matched ? "Encaixou!" : "Observe o contorno e tente outra forma.")}
      </p>
    </>}
    {(finished || matched) && <button type="button" onClick={advance} className={button + " mt-4"}>
      {finished ? "Jogar de novo" : round === rounds.length - 1 ? "Concluir" : "Próxima peça"}
    </button>}
  </section>;
}
