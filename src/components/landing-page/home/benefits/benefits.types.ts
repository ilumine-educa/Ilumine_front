import type { ComponentType } from "react";

export type BenefitIcon = ComponentType<{
  size?: number;
  stroke?: number;
}>;

export type Benefit = {
  icon: BenefitIcon;
  title: string;
  description: string;
  color: string;
};