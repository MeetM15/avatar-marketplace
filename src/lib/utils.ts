import { ScreenSize } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const checkWindowSize = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case "mobile":
      return window.innerWidth < 768;
    case "tablet":
      return window.innerWidth < 1024;
    case "desktop":
      return window.innerWidth >= 1024;
    default:
      return window.innerWidth >= 1024;
  }
};
