import CommunicationGame from "@/src/components/games/commutication/communicationGame";

export default async function CommunicationPage({ searchParams }: PageProps<"/escolher-jogo/[idResp]/[idKid]/comunicacao">) {
  return <CommunicationGame fromCatalog={(await searchParams).origem === "rapidos"} />;
}
