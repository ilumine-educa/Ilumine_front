import ActivityCard from "@/src/components/area-logged/escolher-jogo/ActivityCard";
import { Back, Heading, pageWidth } from "@/src/components/area-logged/escolher-jogo/childUi";

export default async function EscolherJogoPage({ params }: PageProps<"/escolher-jogo/[idResp]/[idKid]">) {
  const { idResp, idKid } = await params;
  const base = `/escolher-jogo/${idResp}/${idKid}`;
  return <div className={pageWidth}>
    <Back href={`/escolha-perfil/${idResp}`}>Trocar de perfil</Back>
    <Heading title="O que vamos fazer hoje?" description="Escolha por onde quer começar." />
    <div className="grid gap-4 md:grid-cols-3">
      <ActivityCard art="chat" href={base + "/comunicacao"} title="Vamos Conversar" description="Escolha figuras para montar uma frase." />
      <ActivityCard art="quick" href={base + "/rapidos"} title="Quick Games" description="Combine as formas no Encaixe divertido." />
      <ActivityCard art="trail" href={base + "/trilha"} title="Minha Trilha" description="Explore palavras e números, uma fase por vez." />
    </div>
  </div>;
}
