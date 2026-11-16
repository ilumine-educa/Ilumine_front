"use client";

import { useRouter } from "next/navigation";

import ProfileAnnouncements from "./profileAnnouncements";
import { useState } from "react";
import ProfileCard from "./profileCard";
import Hero from "../../reusable/hero";

interface Child {
  id: string;
  name: string;
  age: number;
}

interface ChooseProfileProps {
  responsibleId: string;
  profiles: Child[];
}

export default function ChooseProfile({
  responsibleId,
  profiles: children,
}: ChooseProfileProps) {
  const router = useRouter();
  const hasChildren = children.length > 0;
  const [childId, setChildId] = useState("");

  return (
    <>
      <Hero
        title={<>Como deseja continuar?</>}
        description={
          <>Escolha um perfil para acessar o ambiente do Ilumine Educa.</>
        }
        decorations
        wave
        align="center"
      />
      <section className="shadow-black/50 shadow-md px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Escolha de perfil */}
          <div className="flex flex-col gap-5">
            {/* Criança */}
            <ProfileCard
              title={hasChildren ? "Criança" : "Cadastrar criança"}
              description={
                hasChildren
                  ? "Escolha um perfil infantil para acessar jogos e atividades personalizadas de aprendizagem."
                  : "Cadastre uma criança para começar a explorar os jogos e atividades do Ilumine."
              }
              href={
                hasChildren ? undefined : `/dashboard/${responsibleId}/filhos?novo=1`
              }
              onClick={
                hasChildren
                  ? () => {
                      if (!childId) return;

                      router.push(
                        `/escolher-jogo/${responsibleId}/${childId}`,
                      );
                    }
                  : undefined
              }
              options={
                hasChildren
                  ? children.map((child) => ({
                      id: child.id,
                      label: `${child.name} — ${child.age} anos`,
                    }))
                  : undefined
              }
              selectedValue={childId}
              onSelect={setChildId}
              auxiliaryLink={
                hasChildren
                  ? {
                      label: "Cadastrar outra criança",
                      href: `/dashboard/${responsibleId}/filhos?novo=1`,
                    }
                  : undefined
              }
            />

            {/* Responsável */}
            <ProfileCard
              title="Responsável"
              description="Acompanhe o desenvolvimento das crianças, visualize indicadores de aprendizagem e gerencie seus perfis."
              href={`/dashboard/${responsibleId}`}
            />
          </div>
          <div className="border border-border rounded-full my-5" />
          {/* Anúncios */}
          <ProfileAnnouncements />
        </div>
      </section>
    </>
  );
}
