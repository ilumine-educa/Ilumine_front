"use server";

import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/src/lib/responsible/session";
import { updateStore } from "@/src/lib/responsible/store";
import { disciplines, isSubject, solution } from "./lessons";

export async function completePhase(childId: string, slug: string, phase: number, answers: string[]) {
  const account = await getCurrentUser();
  if (!account || !isSubject(slug) || !Number.isInteger(phase)) return false;
  const lesson = disciplines[slug].phases[phase];
  if (!lesson || !Array.isArray(answers) || answers.length !== lesson.challenges.length) return false;
  if (!lesson.challenges.every((task, index) => solution(task) === answers[index])) return false;

  const saved = await updateStore(store => {
    if (!store.children.some(child => child.id === childId && child.responsibleId === String(account.id))) return false;
    store.trails ??= {};
    const progress = store.trails[childId] ??= {};
    const completed = progress[slug] ?? 0;
    if (phase > completed) return false;
    progress[slug] = Math.max(completed, phase + 1);
    return true;
  });
  if (saved) revalidatePath(`/escolher-jogo/${account.id}/${childId}/trilha/${slug}`);
  return saved;
}
