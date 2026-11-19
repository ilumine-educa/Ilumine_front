import ActivityCard from "@/src/components/area-logged/escolher-jogo/ActivityCard";
import { Back, Heading, pageWidth } from "@/src/components/area-logged/escolher-jogo/childUi";

export default async function Trail({ params }: PageProps<"/escolher-jogo/[idResp]/[idKid]/trilha">) {
  const { idResp, idKid } = await params;
  const base = `/escolher-jogo/${idResp}/${idKid}`;
  return <div className={pageWidth}>
    <Back href={base}>Início da criança</Back>
    <Heading title="Minha Trilha" description="Qual caminho você quer explorar?" />
    <div className="grid max-w-5xl gap-5 sm:grid-cols-2">
      <ActivityCard art="portugues" href={base + "/trilha/portugues"} title="Português" description="Junte sílabas para descobrir palavras." />
      <ActivityCard art="matematica" href={base + "/trilha/matematica"} title="Matemática" description="Conte figuras e descubra as quantidades." />
    </div>
  </div>;
}
