"use client";

import { useParams } from "next/navigation";

import { IconBolt, IconMap, IconMessageCircleHeart } from "@tabler/icons-react";

import ActivityCard from "@/src/components/area-logged/escolher-jogo/ActivityCard";
import Hero from "@/src/components/reusable/hero";

export default function EscolherJogoPage() {
  const { idResp, idKid } = useParams<{
    idResp: string;
    idKid: string;
  }>();

  const activities = [
    {
      title: "Vamos conversar?",
      description:
        "Escolha imagens, organize palavras e monte frases para expressar o que você pensa e sente.",
      label: "Comunicação e fala",
      href: `/comunicacao`,
      icon: IconMessageCircleHeart,
      background: "bg-primary-light/30",
      iconBackground: "bg-primary-light",
      iconColor: "text-primary",
      labelColor: "bg-white text-primary",
    },
    {
      title: "Quick Games!",
      description:
        "Prepare-se para uma sequência de jogos rápidos e divertidos. É só clicar e começar a brincar!",
      label: "Diversão e desafios",
      href: `/rapidos`,
      icon: IconBolt,
      background: "bg-secondary-light/40",
      iconBackground: "bg-secondary-light",
      iconColor: "text-secondary-hover",
      labelColor: "bg-white text-secondary-hover",
    },
    {
      title: "Minha trilha",
      description:
        "Escolha uma disciplina e embarque em uma aventura cheia de desafios e descobertas.",
      label: "Aprendizado por etapas",
      href: `/trilha`,
      icon: IconMap,
      background: "bg-success/10",
      iconBackground: "bg-success/15",
      iconColor: "text-success",
      labelColor: "bg-white text-success",
    },
  ];

  return (
    <>
      <Hero
        title="Olá!"
        highlight="Vamos aprender?"
        description="Escolha uma atividade e prepare-se para uma aventura!
          Aqui você aprende, brinca e descobre coisas novas."
        actions={[
          {
            label: "Voltar",
            href: `/escolha-perfil/${idResp}`,
          },
        ]}
        align="center"
      />

      {/* Atividades */}
      <section className="mx-auto max-w-6xl">
        <div className="mb-7">
          <h2 className="font-heading text-2xl font-bold text-text-primary">
            O que vamos fazer hoje?
          </h2>

          <p className="mt-2 text-sm text-text-secondary">
            Escolha seu caminho e vamos começar!
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {activities.map((activity) => (
            <ActivityCard
              key={activity.title}
              {...activity}
              href={`/escolher-jogo/${idResp}/${idKid}${activity.href}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
