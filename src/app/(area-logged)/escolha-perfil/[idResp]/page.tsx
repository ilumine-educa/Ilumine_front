import { getDemoFamily } from "@/src/lib/demo/local";
import ChooseProfile from "@/src/components/area-logged/profile/chooseProfile";

interface PageProps {
  params: Promise<{
    idResp: string;
  }>;
}

export default async function ChooseProfilePage({ params }: PageProps) {
  const { idResp } = await params;

  const { children } = await getDemoFamily(idResp);

  return <ChooseProfile responsibleId={idResp} profiles={children} />;
}
