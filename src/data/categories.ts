import {
  AvatarSubcategories,
  Categories,
  Category,
  FashionSubcategories,
} from "@/types";

export const defaultCategory: Category = {
  name: "All",
  value: Categories.All,
};

export const categoryData: Category[] = [
  {
    name: "Avatars",
    value: Categories.Avatars,
    subcategories: [
      { name: "Human-like", value: AvatarSubcategories.HumanLike },
      { name: "Anthro & Furry", value: AvatarSubcategories.AnthroFurry },
      { name: "Robot & Cyborgs", value: AvatarSubcategories.RobotCyborgs },
      { name: "Others", value: AvatarSubcategories.Others },
      { name: "All in Avatars", value: AvatarSubcategories.AllInAvatars },
    ],
  },
  {
    name: "Fashion",
    value: Categories.Fashion,
    subcategories: [
      { name: "Clothes", value: FashionSubcategories.Clothes },
      { name: "Accessories", value: FashionSubcategories.Accessories },
      { name: "Others", value: FashionSubcategories.Others },
      { name: "All in Fashion", value: FashionSubcategories.AllInFashion },
    ],
  },
  defaultCategory,
];
