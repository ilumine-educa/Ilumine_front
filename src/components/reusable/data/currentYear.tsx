"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export default function CurrentYear() {
  return useSyncExternalStore(subscribe, () => new Date().getFullYear(), () => null);
}
