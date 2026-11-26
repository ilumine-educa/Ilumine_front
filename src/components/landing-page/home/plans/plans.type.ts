import type { Icon } from "@tabler/icons-react";

export type BillingPeriod = "monthly" | "annual";

export type PricingPlan = {
  name: string;
  monthlyCents: number;
  annualCents: number;
  description: string;
  features: string[];
  featured: boolean;
  availability: string;
  icon: Icon;
};
