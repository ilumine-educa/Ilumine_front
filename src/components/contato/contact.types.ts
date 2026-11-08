
import type { TablerIcon } from "@tabler/icons-react";

export type ContactOption = {
  icon: TablerIcon;
  title: string;
  description: string;
  action: string;
  href: string;
  color: string;
};

export type SocialLink = {
  icon: TablerIcon;
  label: string;
  href: string;
  variant: "primary" | "secondary";
};
