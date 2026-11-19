import ActivityCard from "@/src/components/area-logged/escolher-jogo/ActivityCard";
import { Back, Heading, pageWidth } from "@/src/components/area-logged/escolher-jogo/childUi";

export default async function QuickGames({ params }: PageProps<"/escolher-jogo/[idResp]/[idKid]/rapidos">) {
  const { idResp, idKid } = await params;
  const base = `/escolher-jogo/${idResp}/${idKid}`;
  return <div className={pageWidth}>
    <Back href={base}>Início da criança</Back>
    <Heading title="Quick Games" description="Escolha uma brincadeira e jogue no seu ritmo." />
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ActivityCard art="chat" href={base + "/comunicacao?origem=rapidos"} title="Vamos Conversar" description="Monte uma frase com figuras da prancha de comunicação." />
      <article className="self-start rounded-3xl border border-dashed border-border p-6">
        <h2 className="text-2xl">Encaixe divertido</h2>
        <p className="mt-2 text-text-secondary">Ainda indisponível</p>
      </article>
    </div>
  </div>;
}
