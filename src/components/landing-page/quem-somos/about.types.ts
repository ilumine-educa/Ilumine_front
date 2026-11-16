
import type { ComponentType } from "react";

export type AboutIcon = ComponentType<{
  size?: number;
  stroke?: number;
  className?: string;
}>;

export type AboutValue = {
  icon: AboutIcon;
  title: string;
  description: string;
  color: string;
};

export type AboutPillar = {
  number: string;
  title: string;
  description: string;
  icon: AboutIcon;
};

export type AboutPurposes = {
  title: string;
  description: string;
  icon: AboutIcon;
  variant: string;
};
