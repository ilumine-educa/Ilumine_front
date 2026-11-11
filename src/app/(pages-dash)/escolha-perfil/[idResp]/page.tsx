import { findChildrenByResponsibleId } from "@/src/database/children";
import ChooseProfile from "@/src/components/dashboard/profile/chooseProfile";

interface PageProps {
  params: Promise<{
    idResp: string;
  }>;
}

export default async function ChooseProfilePage({ params }: PageProps) {
  const { idResp } = await params;

  const children = findChildrenByResponsibleId(idResp);

  return <ChooseProfile responsibleId={idResp} children={children} />;
}
