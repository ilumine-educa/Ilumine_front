import type { AccountSettings, ChildProfile } from "./types";

function object(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Dados inválidos.");
  return value as Record<string, unknown>;
}

function text(value: unknown, label: string, max: number) {
  if (typeof value !== "string" || !value.trim() || value.trim().length > max) throw new Error(`${label}: informe até ${max} caracteres.`);
  return value.trim();
}

function bool(value: unknown) {
  if (typeof value !== "boolean") throw new Error("Preferência inválida.");
  return value;
}

function accessibility(value: unknown) {
  const data = object(value);
  return { largeText: bool(data.largeText), highContrast: bool(data.highContrast), reducedMotion: bool(data.reducedMotion) };
}

export function validateChild(value: unknown): Omit<ChildProfile, "id" | "responsibleId"> {
  const data = object(value);
  if (typeof data.age !== "number" || !Number.isInteger(data.age) || data.age < 0 || data.age > 17) throw new Error("Informe uma idade de 0 a 17 anos.");
  if (!Array.isArray(data.interests) || data.interests.length > 10) throw new Error("Informe até 10 interesses.");
  const preferences = object(data.preferences);
  if (preferences.pace !== "livre" && preferences.pace !== "pausado") throw new Error("Ritmo inválido.");
  return {
    name: text(data.name, "Nome", 80), age: data.age,
    interests: [...new Set(data.interests.map((item) => text(item, "Interesse", 40)))],
    preferences: { sound: bool(preferences.sound), pace: preferences.pace },
    accessibility: accessibility(data.accessibility),
  };
}

export function validateSettings(value: unknown): AccountSettings {
  const data = object(value);
  const notifications = object(data.notifications);
  return {
    name: text(data.name, "Nome", 80),
    notifications: { platform: bool(notifications.platform), reminders: bool(notifications.reminders) },
    accessibility: accessibility(data.accessibility),
  };
}
