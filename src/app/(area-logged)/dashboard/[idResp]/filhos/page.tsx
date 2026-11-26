import { getDemoFamily } from "@/src/lib/demo/local";
import ChildrenManager from "@/src/components/area-logged/responsible/childrenManager";

export default async function ChildrenPage({ params, searchParams }: { params: Promise<{ idResp: string }>; searchParams: Promise<{ novo?: string }> }) {
  const { idResp } = await params;
  const { account, children } = await getDemoFamily(idResp);
  const { novo } = await searchParams;
  return <ChildrenManager profiles={children} responsibleId={account.id} createInitially={novo === "1"} />;
}
