import { CSSProperties } from "react";

export enum Categories {
  Avatars = "Avatars",
  Fashion = "Fashion",
  All = "All",
}

export enum AvatarSubcategories {
  HumanLike = "Human-Like",
  AnthroFurry = "Anthro & Furry",
  RobotCyborgs = "Robot & Cyborgs",
  Others = "Others",
  AllInAvatars = "All",
}

export enum FashionSubcategories {
  Clothes = "Clothes",
  Accessories = "Accessories",
  Others = "Others",
  AllInFashion = "All",
}

export type Subcategory = {
  name: string; // Display name
  value: AvatarSubcategories | FashionSubcategories; // Enum for internal logic
};

export type Category = {
  name: string; // Display name
  value: Categories; // Enum for internal logic
  subcategories?: Subcategory[];
};

// Type definitions
export type Review = {
  id: string; // Unique ID for the review
  user: string; // Reviewer's name or username
  review: string; // Review content
  rating: number; // Rating out of 5
};

export type Product = {
  id: string; // Unique ID for the product
  thumbnail: string; // Product appearance, e.g., image URL or description
  price: number; // Price of the product
  name: string; // Name of the product
  details: string; // Detailed description of the product
  creator: string; // Creator's name
  reviews: Review[]; // Array of reviews
  category: Category; // The main category of the product
  subcategory: Subcategory; // Subcategory of the product
};

export type MarketplaceContextType = {
  isInputFocused: boolean;
  setIsInputFocused: React.Dispatch<React.SetStateAction<boolean>>;
  isCategoryDropdownOpen: boolean;
  setIsCategoryDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCategory: Category;
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category>>;
  selectedSubCategory: Subcategory | undefined;
  setSelectedSubCategory: React.Dispatch<
    React.SetStateAction<Subcategory | undefined>
  >;
  isLanguageDropdownOpen: boolean;
  setIsLanguageDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isProfileDropdownOpen: boolean;
  setIsProfileDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  productsList: Product[];
  setProductsList: React.Dispatch<React.SetStateAction<Product[]>>;
  generateProductsList: (
    category: Category,
    subcategory: Subcategory | undefined,
    searchQuery: string,
    priceRange: number[]
  ) => Product[];
  showFilters: boolean;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  selectedPlatforms: PlatformType[];
  setSelectedPlatforms: React.Dispatch<React.SetStateAction<PlatformType[]>>;
  isBottomNavVisible: boolean;
  setIsBottomNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
  lastScrollY: number;
  setLastScrollY: React.Dispatch<React.SetStateAction<number>>;
  currentScreen: ScreenSize;
  setCurrentScreen: React.Dispatch<React.SetStateAction<ScreenSize>>;
  showMobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showAllParentCategories: boolean;
  setShowAllParentCategories: React.Dispatch<React.SetStateAction<boolean>>;
};

// Enum for Platform Types
export enum PlatformType {
  VRChatQuest = "VRChat (Quest)",
  VRChatPCVR = "VRChat (PCVR)",
  Spatial = "Spatial",
  ChilloutVR = "ChilloutVR",
  Resonite = "Resonite",
  NeosVR = "Neos VR",
  Cluster = "Cluster",
  VirtualCast = "Virtual Cast",
  Others = "Others",
}

// Type for a platform item
export type Platform = {
  id: PlatformType; // Unique identifier for the platform
  label: string; // Display name for the platform
  image?: string; // Image URL for the platform
  imageHeight: number; // Height of the image
  imageWidth: number; // Width of the image
  imageStyle?: CSSProperties | undefined; // Additional classes for the image
};

export type ScreenSize = "mobile" | "tablet" | "desktop";
