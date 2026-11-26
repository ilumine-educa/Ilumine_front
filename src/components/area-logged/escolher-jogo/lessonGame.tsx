"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { IconApple, IconCheck, IconVolume } from "@tabler/icons-react";
import { disciplines, solution, type Subject } from "@/src/lib/trilha/lessons";
import { Back, button, pageWidth, panel } from "./childUi";
import WordPicture from "./wordPicture";

const subscribe = () => () => {};
const hasSpeech = () => "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
const choice = "min-h-14 min-w-16 rounded-xl border-2 border-border bg-surface px-4 py-2 text-2xl font-bold hover:border-primary focus-visible:outline-offset-4";

type Props = { map: string; subject: Subject; phase: number; quiet: boolean; sound: boolean; largeText: boolean };

export default function LessonGame({ map, subject, phase, quiet, sound, largeText }: Props) {
  const course = disciplines[subject];
  const challenges = course.phases[phase].challenges;
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [marked, setMarked] = useState<number[]>([]);
  const [feedback, setFeedback] = useState("");
  const [simple, setSimple] = useState(quiet);
  const [spoken, setSpoken] = useState(sound);
  const [correct, setCorrect] = useState("");
  const [finished, setFinished] = useState(false);
  const canSpeak = useSyncExternalStore(subscribe, hasSpeech, () => false);
  const task = challenges[answers.length];
  const instruction = task.kind === "word" ? `Monte a palavra ${task.picture}. Toque nas sílabas em ordem.` : "Conte as maçãs. Escolha o número.";
  const last = answers.length + 1 === challenges.length;

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  function repeat() {
    window.speechSynthesis.cancel();
    const voice = new SpeechSynthesisUtterance(instruction);
    voice.lang = "pt-BR";
    voice.rate = 0.85;
    window.speechSynthesis.speak(voice);
  }

  function check(answer: string) {
    if (answer === solution(task)) {
      setCorrect(answer);
      setFeedback("Isso mesmo!");
    } else {
      setSelected([]);
      setFeedback(task.kind === "word" ? "Vamos tentar de novo. Qual sílaba vem primeiro?" : "Tente outra vez. Você pode tocar em cada maçã para contar.");
    }
  }

  function next() {
    const results = [...answers, correct];
    if (last) {
      setFinished(true);
    } else {
      setAnswers(results);
      setSelected([]);
      setMarked([]);
      setCorrect("");
      setFeedback("");
    }
  }

  return <div className={pageWidth + (largeText ? " text-xl" : "")}>
    <Back href={map}>Sair para o mapa</Back>
    <section className={panel + " mx-auto max-w-3xl text-center"}>
      <p className="font-semibold text-text-secondary">{course.name} · Fase {phase + 1}</p>
      <h1 className="mt-2 text-3xl sm:text-5xl">{course.game}</h1>
      {finished ? <div role="status" className="mt-8 space-y-5">
        <IconCheck aria-hidden className="mx-auto size-14 text-success" />
        <h2 className="text-3xl">Fase concluída!</h2>
        <p>Nesta demonstração, o progresso não é salvo.</p>
        <Link href={map} className={button}>Voltar ao mapa</Link>
      </div> : <>
        <div aria-live="polite" className="my-5">
          <p className="text-sm">Desafio {answers.length + 1} de {challenges.length}</p>
          <h2 className="mt-2 font-body text-xl font-semibold sm:text-2xl">{instruction}</h2>
        </div>
        <div className={simple ? "py-3" : "rounded-2xl bg-primary-light/25 p-3 sm:p-5"}>
          {task.kind === "word" ? <WordPicture picture={task.picture} /> :
            <div className="mx-auto grid max-w-sm grid-cols-5 gap-1">
              {Array.from({ length: task.count }, (_, i) => <button key={i} aria-label={`Maçã ${i + 1}`} aria-pressed={marked.includes(i)}
                disabled={!!correct} onClick={() => setMarked(marked.includes(i) ? marked.filter(n => n !== i) : [...marked, i])}
                className="relative grid min-h-12 place-items-center rounded-lg aria-pressed:bg-surface aria-pressed:ring-2 aria-pressed:ring-primary">
                <IconApple aria-hidden stroke={1.7} className="size-10 fill-orange-200 text-orange-900 sm:size-12" />
                {marked.includes(i) && <IconCheck aria-hidden className="absolute bottom-0 right-0 size-5 rounded-full bg-surface" />}
              </button>)}
            </div>}
        </div>
        {task.kind === "word" && <p className="mt-5 text-2xl font-bold tracking-widest" aria-label="Palavra montada" aria-live="polite">
          {task.syllables.map((_, i) => task.tiles[selected[i]] ?? "＿").join(" ")}
        </p>}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {task.kind === "word" ? task.tiles.map((tile, i) =>
            <button key={tile} className={choice + " disabled:opacity-50"} disabled={!!correct || selected.includes(i)}
              onClick={() => {
                const indexes = [...selected, i];
                setSelected(indexes);
                setFeedback("");
                if (indexes.length === task.syllables.length) check(indexes.map(n => task.tiles[n]).join(""));
              }}>{tile}</button>) :
            task.options.map(value => <button key={value} className={choice} disabled={!!correct} onClick={() => check(String(value))}>{value}</button>)}
        </div>
        <p role="status" className="mt-4 min-h-7 font-semibold">{feedback}</p>
        {correct && <button className={button + " mt-2"} onClick={next}>{last ? "Concluir fase" : "Próximo desafio"}</button>}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 border-t border-border pt-4">
          {canSpeak && spoken && <button onClick={repeat} className="inline-flex min-h-11 items-center gap-2 font-semibold"><IconVolume aria-hidden />Ouvir instrução</button>}
          <label className="inline-flex min-h-11 items-center gap-2"><input type="checkbox" checked={simple} onChange={e => setSimple(e.target.checked)} />Fundo simples</label>
          {canSpeak && <label className="inline-flex min-h-11 items-center gap-2"><input type="checkbox" checked={spoken} onChange={e => {
            setSpoken(e.target.checked);
            window.speechSynthesis.cancel();
          }} />Narração</label>}
        </div>
      </>}
    </section>
  </div>;
}
