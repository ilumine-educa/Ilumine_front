import type { Icon } from "@tabler/icons-react";

export type PricingPlan = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  featured: boolean;
  availability: string;
  icon: Icon;
};
