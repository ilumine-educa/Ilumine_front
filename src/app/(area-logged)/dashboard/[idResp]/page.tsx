import { requireFamily } from "@/src/lib/responsible/session";
import Monitoring from "@/src/components/area-logged/responsible/monitoring";

export default async function MonitoringPage({ params }: { params: Promise<{ idResp: string }> }) {
  const { idResp } = await params;
  const { account, children } = await requireFamily(idResp);
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  return <Monitoring responsibleId={account.id} profiles={children} today={today} />;
}
