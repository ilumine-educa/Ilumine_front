"use client";

import { useMemo, useState } from "react";

import {
  IconArrowLeft,
  IconCheck,
  IconRefresh,
  IconVolume2,
} from "@tabler/icons-react";
import Link from "next/link";

import {
  communicationWords,
  wordCategories,
  type CommunicationWord,
  type WordCategory,
} from "@/src/database/comunnicationWords";
import { useParams } from "next/navigation";

import { pageWidth } from "@/src/components/area-logged/escolher-jogo/childUi";

export default function CommunicationGame() {
  const params = useParams<{
    idResp: string;
    idKid: string;
  }>();

  const { idResp, idKid } = params;
  const [category, setCategory] = useState<WordCategory | "todas">("todas");

  const [selectedWords, setSelectedWords] = useState<CommunicationWord[]>([]);

  const filteredWords = useMemo(() => {
    if (category === "todas") return communicationWords;

    return communicationWords.filter((word) => word.category === category);
  }, [category]);

  function addWord(word: CommunicationWord) {
    setSelectedWords((previous) => [...previous, word]);
  }

  function removeWord(index: number) {
    setSelectedWords((previous) =>
      previous.filter((_, wordIndex) => wordIndex !== index),
    );
  }

  function clearSentence() {
    setSelectedWords([]);
  }

  function speakSentence() {
    if (!selectedWords.length || !("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();

    const sentence = selectedWords.map((word) => word.label).join(" ");

    const utterance = new SpeechSynthesisUtterance(sentence);

    utterance.lang = "pt-BR";
    utterance.rate = 0.85;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className={pageWidth}>
      <div>
        {/* Cabeçalho */}
        <header className="mb-8 flex items-center justify-between gap-4">
          <Link
            href={`/escolher-jogo/${idResp}/${idKid}`}
            className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text-secondary transition hover:bg-surface-secondary"
          >
            <IconArrowLeft size={18} />
            Início da criança
          </Link>

          <span className="rounded-full bg-primary-light px-4 py-2 text-sm font-semibold text-primary">
            Jogo de comunicação
          </span>
        </header>

        {/* Título */}
        <section className="mb-8 text-center">
          <h1 className="font-heading text-3xl font-semibold text-text-primary sm:text-4xl">
            Monte sua frase!
          </h1>

          <p className="mt-2 text-text-secondary">
            Escolha as palavras e conte o que você quer dizer.
          </p>
        </section>

        {/* Área da frase */}
        <section className="mb-8 rounded-3xl border border-border bg-surface p-5 shadow-sm sm:p-7">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="font-heading text-xl font-semibold text-text-primary">
              Minha frase
            </h2>

            <button
              type="button"
              onClick={clearSentence}
              disabled={!selectedWords.length}
              className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-text-secondary transition hover:bg-error/10 hover:text-error disabled:cursor-not-allowed disabled:opacity-40"
            >
              <IconRefresh size={17} />
              Limpar
            </button>
          </div>

          <div className="flex min-h-36 flex-wrap content-start items-center gap-3 rounded-2xl border-2 border-dashed border-border bg-background p-4">
            {selectedWords.length ? (
              selectedWords.map((word, index) => (
                <button
                  key={`${word.id}-${index}`}
                  type="button"
                  onClick={() => removeWord(index)}
                  title={`Remover ${word.label}`}
                  className="group flex min-w-24 flex-col items-center gap-2 rounded-2xl border border-primary/20 bg-primary-light px-4 py-3 transition hover:border-error hover:bg-error/10"
                >
                  <span className="text-3xl">{word.emoji}</span>

                  <span className="font-semibold text-primary group-hover:text-error">
                    {word.label}
                  </span>

                  <span className="text-xs text-text-secondary">
                    Toque para remover
                  </span>
                </button>
              ))
            ) : (
              <div className="flex w-full flex-col items-center justify-center py-5 text-center">
                <span className="mb-2 text-4xl">💭</span>

                <p className="font-medium text-text-secondary">
                  Sua frase aparecerá aqui!
                </p>

                <p className="mt-1 text-sm text-text-muted">
                  Escolha uma palavra para começar.
                </p>
              </div>
            )}
          </div>

          {/* Botão de reprodução */}
          <button
            type="button"
            onClick={speakSentence}
            disabled={!selectedWords.length}
            className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 font-semibold text-text-inverse transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-40"
          >
            <IconVolume2 size={24} />
            Ouvir minha frase
          </button>
        </section>

        {/* Seleção de palavras */}
        <section>
          <div className="mb-5">
            <h2 className="font-heading text-2xl font-semibold text-text-primary">
              Escolha suas palavras
            </h2>

            <p className="mt-1 text-sm text-text-secondary">
              Toque nas imagens para adicionar palavras à sua frase.
            </p>
          </div>

          {/* Categorias */}
          <div className="mb-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setCategory("todas")}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                category === "todas"
                  ? "bg-primary text-text-inverse"
                  : "border border-border bg-surface text-text-secondary hover:bg-surface-secondary"
              }`}
            >
              Todas
            </button>

            {wordCategories.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCategory(item.id)}
                className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  category === item.id
                    ? "bg-primary text-text-inverse"
                    : "border border-border bg-surface text-text-secondary hover:bg-surface-secondary"
                }`}
              >
                <span>{item.emoji}</span>
                {item.label}
              </button>
            ))}
          </div>

          {/* Palavras disponíveis */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {filteredWords.map((word) => (
              <button
                key={word.id}
                type="button"
                onClick={() => addWord(word)}
                className="group flex min-h-36 flex-col items-center justify-center gap-3 rounded-3xl border border-border bg-surface p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-md active:scale-95"
              >
                <span className="text-5xl transition group-hover:scale-110">
                  {word.emoji}
                </span>

                <span className="font-semibold text-text-primary">
                  {word.label}
                </span>

                <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition group-hover:opacity-100">
                  <IconCheck size={14} />
                  Adicionar
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
