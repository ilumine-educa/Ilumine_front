import { requireFamily } from "@/src/lib/responsible/session";
import SettingsForm from "@/src/components/area-logged/responsible/settingsForm";

export default async function SettingsPage({ params }: { params: Promise<{ idResp: string }> }) {
  const { idResp } = await params;
  const { account, settings } = await requireFamily(idResp);
  return <SettingsForm account={account} settings={settings} />;
}
