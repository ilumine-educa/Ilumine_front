export type ChildProfile = {
  id: string;
  responsibleId: string;
  name: string;
  age: number;
  interests: string[];
  preferences: { sound: boolean; pace: "livre" | "pausado" };
  accessibility: { largeText: boolean; highContrast: boolean; reducedMotion: boolean };
};

export type AccountSettings = {
  name: string;
  notifications: { platform: boolean; reminders: boolean };
  accessibility: { largeText: boolean; highContrast: boolean; reducedMotion: boolean };
};

export type PublicAccount = { id: number; name: string; email: string };

export const defaultAccessibility = {
  largeText: false,
  highContrast: false,
  reducedMotion: false,
};
