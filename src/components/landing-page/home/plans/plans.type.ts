import type { Icon } from "@tabler/icons-react";

export type BillingPeriod = "monthly" | "annual";

export type PricingPlan = {
  name: string;
  price: string;
  annualPrice: string;
  period?: string;
  description: string;
  features: string[];
  featured: boolean;
  availability: string;
  icon: Icon;
};
