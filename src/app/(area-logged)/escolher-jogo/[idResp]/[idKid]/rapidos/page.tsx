import { Back, Heading, pageWidth } from "@/src/components/area-logged/escolher-jogo/childUi";
import ShapeGame from "@/src/components/games/shapeGame";

export default async function QuickGames({ params }: PageProps<"/escolher-jogo/[idResp]/[idKid]/rapidos">) {
  const { idResp, idKid } = await params;
  return <div className={pageWidth}>
    <Back href={`/escolher-jogo/${idResp}/${idKid}`}>Início da criança</Back>
    <Heading title="Encaixe divertido" description="Toque na forma que combina com a peça." />
    <ShapeGame />
  </div>;
}
