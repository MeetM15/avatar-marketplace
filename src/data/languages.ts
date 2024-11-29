export type LanguageValue = "en-US" | "ja-JP";

export type LanguageOption = {
  name: string;
  image: string;
  value: LanguageValue;
};

export const languagesData: LanguageOption[] = [
  {
    name: "English(US)",
    image: "/languages/usa-flag.png",
    value: "en-US",
  },
  {
    name: "Japanese",
    image: "/languages/japan-flag.png",
    value: "ja-JP",
  },
];
