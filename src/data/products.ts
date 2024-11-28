import {
  AvatarSubcategories,
  Categories,
  FashionSubcategories,
  Product,
} from "@/types";

export const productsData: Product[] = [
  {
    id: "prod-1",
    name: "Human-like Avatar",
    thumbnail: "https://example.com/avatar-human.jpg",
    price: 49.99,
    details: "A realistic human-like avatar for gaming and VR experiences.",
    creator: "John Doe",
    reviews: [
      { id: "rev-1", user: "Alice", review: "Amazing quality!", rating: 5 },
      { id: "rev-2", user: "Bob", review: "Very lifelike.", rating: 4 },
    ],
    category: {
      name: "Avatars",
      value: Categories.Avatars,
    },
    subcategory: {
      name: "Human-like",
      value: AvatarSubcategories.HumanLike,
    },
  },
  {
    id: "prod-2",
    name: "Fashion Hoodie",
    thumbnail: "https://example.com/fashion-clothes.jpg",
    price: 29.99,
    details: "A stylish hoodie with a unique design.",
    creator: "Jane Smith",
    reviews: [
      { id: "rev-3", user: "Charlie", review: "Super comfy!", rating: 5 },
      { id: "rev-4", user: "Diana", review: "Great for winter.", rating: 4 },
    ],
    category: {
      name: "Fashion",
      value: Categories.Fashion,
    },
    subcategory: {
      name: "Clothes",
      value: FashionSubcategories.Clothes,
    },
  },
  {
    id: "prod-3",
    name: "Robot Avatar",
    thumbnail: "https://example.com/robot-avatar.jpg",
    price: 79.99,
    details: "A futuristic robot avatar for your sci-fi projects.",
    creator: "CyberTech Studios",
    reviews: [
      { id: "rev-5", user: "Eve", review: "Excellent details!", rating: 5 },
      { id: "rev-6", user: "Frank", review: "Very innovative.", rating: 5 },
    ],
    category: {
      name: "Avatars",
      value: Categories.Avatars,
    },
    subcategory: {
      name: "Robot & Cyborgs",
      value: AvatarSubcategories.RobotCyborgs,
    },
  },
  {
    id: "prod-4",
    name: "Fashion Bracelet",
    thumbnail: "https://example.com/fashion-accessory.jpg",
    price: 19.99,
    details: "A handcrafted bracelet with a minimalist design.",
    creator: "Artisan Works",
    reviews: [
      {
        id: "rev-7",
        user: "Grace",
        review: "Beautiful craftsmanship.",
        rating: 4,
      },
      { id: "rev-8", user: "Hank", review: "Matches any outfit!", rating: 5 },
    ],
    category: {
      name: "Fashion",
      value: Categories.Fashion,
    },
    subcategory: {
      name: "Accessories",
      value: FashionSubcategories.Accessories,
    },
  },
  {
    id: "prod-5",
    name: "Anthro Furry Avatar",
    thumbnail: "https://example.com/anthro-avatar.jpg",
    price: 59.99,
    details: "An anthropomorphic furry avatar for creative projects.",
    creator: "FurryArt Inc.",
    reviews: [
      { id: "rev-9", user: "Ivy", review: "Fantastic design!", rating: 5 },
      { id: "rev-10", user: "Jack", review: "Love the style.", rating: 4 },
    ],
    category: {
      name: "Avatars",
      value: Categories.Avatars,
    },
    subcategory: {
      name: "Anthro & Furry",
      value: AvatarSubcategories.AnthroFurry,
    },
  },
  {
    id: "prod-6",
    name: "Fashion Accessory",
    thumbnail: "https://example.com/fashion-other.jpg",
    price: 24.99,
    details: "A unique fashion accessory for special occasions.",
    creator: "StyleCraft",
    reviews: [
      { id: "rev-11", user: "Liam", review: "Very elegant.", rating: 5 },
      { id: "rev-12", user: "Mia", review: "A bit expensive.", rating: 3 },
    ],
    category: {
      name: "Fashion",
      value: Categories.Fashion,
    },
    subcategory: {
      name: "Others",
      value: FashionSubcategories.Others,
    },
  },
  {
    id: "prod-7",
    name: "Cyborg Avatar",
    thumbnail: "https://example.com/avatar-cyborg.jpg",
    price: 69.99,
    details: "A detailed cyborg avatar perfect for futuristic settings.",
    creator: "MechaArts",
    reviews: [
      { id: "rev-13", user: "Nina", review: "Stunning visuals.", rating: 5 },
      {
        id: "rev-14",
        user: "Oscar",
        review: "Could be more customizable.",
        rating: 4,
      },
    ],
    category: {
      name: "Avatars",
      value: Categories.Avatars,
    },
    subcategory: {
      name: "Robot & Cyborgs",
      value: AvatarSubcategories.RobotCyborgs,
    },
  },
  {
    id: "prod-8",
    name: "Fashion Hat",
    thumbnail: "https://example.com/fashion-hat.jpg",
    price: 14.99,
    details: "A classic summer hat for sunny days.",
    creator: "SunnyStyle",
    reviews: [
      { id: "rev-15", user: "Peter", review: "Very lightweight.", rating: 4 },
      {
        id: "rev-16",
        user: "Quinn",
        review: "Good quality for the price.",
        rating: 5,
      },
    ],
    category: {
      name: "Fashion",
      value: Categories.Fashion,
    },
    subcategory: {
      name: "Accessories",
      value: FashionSubcategories.Accessories,
    },
  },
  {
    id: "prod-9",
    name: "Fantasy Avatar",
    thumbnail: "https://example.com/avatar-other.jpg",
    price: 39.99,
    details: "A unique avatar that defies categorization.",
    creator: "CreativeAvatars",
    reviews: [
      { id: "rev-17", user: "Rachel", review: "Very imaginative!", rating: 5 },
      {
        id: "rev-18",
        user: "Sam",
        review: "Lacks customization options.",
        rating: 3,
      },
    ],
    category: {
      name: "Avatars",
      value: Categories.Avatars,
    },
    subcategory: {
      name: "Others",
      value: AvatarSubcategories.Others,
    },
  },
  {
    id: "prod-10",
    name: "Fashion Jacket",
    thumbnail: "https://example.com/fashion-jacket.jpg",
    price: 89.99,
    details: "A premium leather jacket for style enthusiasts.",
    creator: "UrbanWear",
    reviews: [
      { id: "rev-19", user: "Tina", review: "Exceptional quality!", rating: 5 },
      { id: "rev-20", user: "Ursula", review: "Too pricey.", rating: 3 },
    ],
    category: {
      name: "Fashion",
      value: Categories.Fashion,
    },
    subcategory: {
      name: "Clothes",
      value: FashionSubcategories.Clothes,
    },
  },
  {
    id: "prod-11",
    name: "Fashion Boots",
    thumbnail: "https://example.com/fashion-boots.jpg",
    price: 59.99,
    details: "Durable hiking boots with waterproof materials.",
    creator: "TrailGear",
    reviews: [
      {
        id: "rev-21",
        user: "Victor",
        review: "Great for long hikes.",
        rating: 5,
      },
      {
        id: "rev-22",
        user: "Wendy",
        review: "A bit heavy but sturdy.",
        rating: 4,
      },
    ],
    category: {
      name: "Fashion",
      value: Categories.Fashion,
    },
    subcategory: {
      name: "Others",
      value: FashionSubcategories.Others,
    },
  },
  {
    id: "prod-12",
    name: "RPG Avatar",
    thumbnail: "https://example.com/avatar-fantasy.jpg",
    price: 99.99,
    details: "A fantasy-themed avatar for RPG lovers.",
    creator: "FantasyForge",
    reviews: [
      { id: "rev-23", user: "Xander", review: "Incredible detail!", rating: 5 },
      {
        id: "rev-24",
        user: "Yara",
        review: "Perfect for my campaign.",
        rating: 4,
      },
    ],
    category: {
      name: "Avatars",
      value: Categories.Avatars,
    },
    subcategory: {
      name: "Others",
      value: AvatarSubcategories.Others,
    },
  },
  {
    id: "prod-13",
    name: "Fashion Watch",
    thumbnail: "https://example.com/fashion-watch.jpg",
    price: 199.99,
    details: "A luxurious wristwatch with a modern design.",
    creator: "TimeCraft",
    reviews: [
      { id: "rev-25", user: "Zane", review: "Looks fantastic!", rating: 5 },
      { id: "rev-26", user: "Ava", review: "Very high quality.", rating: 4 },
    ],
    category: {
      name: "Fashion",
      value: Categories.Fashion,
    },
    subcategory: {
      name: "Accessories",
      value: FashionSubcategories.Accessories,
    },
  },
  {
    id: "prod-14",
    name: "Steampunk Avatar",
    thumbnail: "https://example.com/avatar-steampunk.jpg",
    price: 89.99,
    details: "A steampunk-inspired avatar with intricate details.",
    creator: "SteampunkWorld",
    reviews: [
      { id: "rev-27", user: "Ben", review: "Totally unique!", rating: 5 },
      { id: "rev-28", user: "Cathy", review: "Impressive design.", rating: 4 },
    ],
    category: {
      name: "Avatars",
      value: Categories.Avatars,
    },
    subcategory: {
      name: "Robot & Cyborgs",
      value: AvatarSubcategories.RobotCyborgs,
    },
  },
  {
    id: "prod-15",
    name: "Fashion Scarf",
    thumbnail: "https://example.com/fashion-scarf.jpg",
    price: 24.99,
    details: "A cozy scarf made of premium wool.",
    creator: "WinterStyle",
    reviews: [
      { id: "rev-29", user: "Dan", review: "Super warm.", rating: 5 },
      {
        id: "rev-30",
        user: "Ella",
        review: "Perfect for cold weather.",
        rating: 4,
      },
    ],
    category: {
      name: "Fashion",
      value: Categories.Fashion,
    },
    subcategory: {
      name: "Accessories",
      value: FashionSubcategories.Accessories,
    },
  },
  {
    id: "prod-16",
    name: "Warrior Avatar",
    thumbnail: "https://example.com/avatar-warrior.jpg",
    price: 149.99,
    details: "A fierce warrior avatar with customizable armor.",
    creator: "BattleAvatars",
    reviews: [
      { id: "rev-31", user: "Finn", review: "Very detailed.", rating: 5 },
      {
        id: "rev-32",
        user: "Gina",
        review: "Works great for games.",
        rating: 4,
      },
    ],
    category: {
      name: "Avatars",
      value: Categories.Avatars,
    },
    subcategory: {
      name: "Human-like",
      value: AvatarSubcategories.HumanLike,
    },
  },
  {
    id: "prod-17",
    name: "Fashion Backpack",
    thumbnail: "https://example.com/fashion-backpack.jpg",
    price: 39.99,
    details: "A lightweight and durable backpack for everyday use.",
    creator: "CarryOn",
    reviews: [
      { id: "rev-33", user: "Harry", review: "Perfect size.", rating: 4 },
      {
        id: "rev-34",
        user: "Ivy",
        review: "Stylish and practical.",
        rating: 5,
      },
    ],
    category: {
      name: "Fashion",
      value: Categories.Fashion,
    },
    subcategory: {
      name: "Others",
      value: FashionSubcategories.Others,
    },
  },
  {
    id: "prod-18",
    name: "Alien Avatar",
    thumbnail: "https://example.com/avatar-alien.jpg",
    price: 59.99,
    details: "An alien avatar for sci-fi enthusiasts.",
    creator: "GalacticCreations",
    reviews: [
      {
        id: "rev-35",
        user: "Jack",
        review: "Great for sci-fi worlds.",
        rating: 5,
      },
      { id: "rev-36", user: "Kara", review: "Very detailed.", rating: 4 },
    ],
    category: {
      name: "Avatars",
      value: Categories.Avatars,
    },
    subcategory: {
      name: "Others",
      value: AvatarSubcategories.Others,
    },
  },
  {
    id: "prod-19",
    name: "Fashion Shoes",
    thumbnail: "https://example.com/fashion-shoes.jpg",
    price: 79.99,
    details: "Stylish sneakers with premium comfort.",
    creator: "FeetFirst",
    reviews: [
      { id: "rev-37", user: "Leo", review: "Very comfortable.", rating: 5 },
      { id: "rev-38", user: "Mia", review: "Worth the price.", rating: 5 },
    ],
    category: {
      name: "Fashion",
      value: Categories.Fashion,
    },
    subcategory: {
      name: "Clothes",
      value: FashionSubcategories.Clothes,
    },
  },
  {
    id: "prod-20",
    name: "Pirate Avatar",
    thumbnail: "https://example.com/avatar-pirate.jpg",
    price: 129.99,
    details: "A pirate-themed avatar with customizable accessories.",
    creator: "HighSeasAvatars",
    reviews: [
      {
        id: "rev-39",
        user: "Nina",
        review: "Great for themed projects.",
        rating: 5,
      },
      { id: "rev-40", user: "Oscar", review: "Loved the details.", rating: 4 },
    ],
    category: {
      name: "Avatars",
      value: Categories.Avatars,
    },
    subcategory: {
      name: "Human-like",
      value: AvatarSubcategories.HumanLike,
    },
  },
];
