import { notFound, redirect } from "next/navigation";
import { loadTrail } from "@/src/lib/trilha/progress";
import { disciplines } from "@/src/lib/trilha/lessons";
import LessonGame from "@/src/components/area-logged/escolher-jogo/lessonGame";

export default async function Play({ params }: PageProps<"/escolher-jogo/[idResp]/[idKid]/trilha/[disciplina]/[fase]">) {
  const { idResp, idKid, disciplina, fase } = await params;
  const { child, subject, completed } = await loadTrail(idResp, idKid, disciplina);
  const index = Number(fase) - 1;
  if (!disciplines[subject].phases[index] || String(index + 1) !== fase) notFound();
  const map = `/escolher-jogo/${idResp}/${idKid}/trilha/${subject}`;
  if (index > completed) redirect(map);
  return <LessonGame key={map + fase} map={map} subject={subject} phase={index}
    quiet={child.accessibility.reducedMotion} sound={child.preferences.sound} largeText={child.accessibility.largeText} />;
}
