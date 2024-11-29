import React, { createContext, useContext, useEffect, useState } from "react";
import {
  Categories,
  Category,
  MarketplaceContextType,
  PlatformType,
  Product,
  ScreenSize,
  Subcategory,
} from "@/types";
import { defaultCategory } from "@/data/categories";
import { productsData } from "@/data/products";
const MarketplaceContext = createContext<MarketplaceContextType>(
  {} as MarketplaceContextType
);
export const MarketplaceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(defaultCategory);
  const [selectedSubCategory, setSelectedSubCategory] = useState<
    Subcategory | undefined
  >();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [productsList, setProductsList] = useState<Product[]>(productsData);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<PlatformType[]>(
    []
  );
  const [isBottomNavVisible, setIsBottomNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentScreen, setCurrentScreen] = useState<ScreenSize>("desktop");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsBottomNavVisible(true);
      } else {
        setIsBottomNavVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setCurrentScreen("desktop");
      } else if (window.innerWidth >= 768) {
        setCurrentScreen("tablet");
      } else {
        setCurrentScreen("mobile");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateProductsList = (
    category: Category,
    subcategory: Subcategory | undefined,
    searchQuery: string,
    priceRange: number[] = [0, 1000]
  ) => {
    const filteredProducts = productsData.filter((product) => {
      const categoryMatch =
        category.value === Categories.All
          ? true
          : product.category.value === category.value;
      const subcategoryMatch = subcategory
        ? subcategory.value === "All"
          ? true
          : product.subcategory.value === subcategory.value
        : true;
      const searchMatch = searchQuery
        ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return categoryMatch && subcategoryMatch && searchMatch && priceMatch;
    });
    return filteredProducts;
  };

  useEffect(() => {
    const newProductsList = generateProductsList(
      selectedCategory,
      selectedSubCategory || undefined,
      searchQuery,
      priceRange
    );
    setProductsList(newProductsList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, selectedSubCategory]);

  return (
    <MarketplaceContext.Provider
      value={{
        isInputFocused,
        setIsInputFocused,
        isCategoryDropdownOpen,
        setIsCategoryDropdownOpen,
        selectedCategory,
        setSelectedCategory,
        selectedSubCategory,
        setSelectedSubCategory,
        isLanguageDropdownOpen,
        setIsLanguageDropdownOpen,
        isProfileDropdownOpen,
        setIsProfileDropdownOpen,
        searchQuery,
        setSearchQuery,
        productsList,
        setProductsList,
        generateProductsList,
        showFilters,
        setShowFilters,
        priceRange,
        setPriceRange,
        selectedPlatforms,
        setSelectedPlatforms,
        isBottomNavVisible,
        setIsBottomNavVisible,
        lastScrollY,
        setLastScrollY,
        currentScreen,
        setCurrentScreen,
        showMobileMenu,
        setShowMobileMenu,
      }}>
      {children}
    </MarketplaceContext.Provider>
  );
};

export const useMarketplace = () => useContext(MarketplaceContext);
