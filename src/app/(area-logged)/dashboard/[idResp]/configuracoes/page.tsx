import { getDemoFamily } from "@/src/lib/demo/local";
import SettingsForm from "@/src/components/area-logged/responsible/settingsForm";

export default async function SettingsPage({ params }: { params: Promise<{ idResp: string }> }) {
  const { idResp } = await params;
  const { account, settings } = await getDemoFamily(idResp);
  return <SettingsForm account={account} settings={settings} />;
}
