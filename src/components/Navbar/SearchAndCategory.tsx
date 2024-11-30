"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoSearchOutline } from "react-icons/io5";
import { useMarketplace } from "@/lib/context/useMarketplace";
import { Categories } from "@/types";
import { ChevronRight } from "lucide-react";
import { categoryData, defaultCategory } from "@/data/categories";

const SearchAndCategory = () => {
  const {
    isInputFocused,
    setIsInputFocused,
    isCategoryDropdownOpen,
    setIsCategoryDropdownOpen,
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
    searchQuery,
    setSearchQuery,
    generateProductsList,
    setProductsList,
    priceRange,
    isBottomNavVisible,
    currentScreen,
    showAllParentCategories,
    setShowAllParentCategories,
  } = useMarketplace();
  return (
    <div
      className={`bg-background-2 rounded-full h-full flex items-center w-[279px] xl:w-[370px] 2xl:w-[529px] 3xl:w-[689px] ${
        isBottomNavVisible ? "md:w-[640px]" : "md:w-[267px]"
      }`}>
      <div
        className={`rounded-full h-full pl-6 lg:pl-8 py-[3px] justify-center flex flex-col text-dark-gray flex-1 ${
          isInputFocused ? "bg-background-3" : "bg-background-2"
        }`}>
        <label htmlFor="search" className="text-xs font-[700]">
          {!isInputFocused && "Keyword"}
        </label>
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={isInputFocused ? "" : "Search"}
          id="search"
          onFocus={() => {
            setIsInputFocused(true);
          }}
          onBlur={() => {
            setIsInputFocused(false);
          }}
        />
      </div>
      {!isInputFocused && !isCategoryDropdownOpen && (
        <div className="py-1.5 h-full">
          <Separator orientation="vertical" className="bg-light-gray" />
        </div>
      )}
      <div
        className={`rounded-full pl-6 md:pl-4 lg:pl-8 h-full flex items-center gap-1 text-dark-gray flex-1 ${
          isCategoryDropdownOpen ? "bg-background-3" : "bg-background-2"
        }`}>
        <Popover
          open={isCategoryDropdownOpen}
          onOpenChange={(isOpen) => setIsCategoryDropdownOpen(isOpen)}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="flex-1 bg-transparent hover:bg-transparent px-0 py-[3px] h-full"
              onClick={() =>
                setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
              }>
              <div className="flex flex-col text-dark-gray w-full h-full text-left">
                <span className="text-xs font-[700] w-full">Category</span>
                <span className="h-6 w-full flex items-center">
                  {selectedSubCategory?.name ||
                    selectedCategory?.name ||
                    defaultCategory.name}
                </span>
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className={`md:w-[444px] h-max md:h-[352px] rounded-[32px] p-4 bg-background-3 ${
              selectedCategory?.subcategories &&
              selectedCategory.subcategories.length > 0
                ? "w-[256px]"
                : "w-[232px]"
            }`}
            align="end"
            alignOffset={-52}
            sideOffset={16}>
            <div className="flex flex-col md:flex-row gap-1.5">
              <div className="h-full">
                {categoryData.map((cat) => {
                  return (
                    <Button
                      key={cat.value}
                      className={`w-[200px] h-10 items-center justify-between rounded-full bg-transparent hover:bg-background-4 shadow-none ${
                        selectedCategory.value === cat.value
                          ? "bg-background-4"
                          : ""
                      } ${
                        selectedCategory.value === cat.value ||
                        showAllParentCategories
                          ? "flex"
                          : "hidden md:flex"
                      }`}
                      onClick={() => {
                        setSelectedCategory(cat);
                        if (cat?.subcategories?.length) {
                          setShowAllParentCategories((prev) => !prev);
                        }
                        setSelectedSubCategory(undefined);
                      }}>
                      <span className="font-normal">{cat.value}</span>
                      {cat.value !== Categories.All && (
                        <ChevronRight className="!w-4 !h-4" />
                      )}
                    </Button>
                  );
                })}
              </div>
              {selectedCategory?.subcategories &&
                selectedCategory.subcategories.length > 0 && (
                  <Separator
                    orientation={
                      currentScreen === "mobile" ? "horizontal" : "vertical"
                    }
                    className="bg-light-gray"
                  />
                )}
              {selectedCategory?.subcategories &&
                selectedCategory.subcategories.length > 0 && (
                  <div className="h-full pl-6 md:pl-0">
                    {selectedCategory.subcategories.map((subCat) => {
                      return (
                        <Button
                          key={subCat.value}
                          className={`w-[200px] h-10 flex items-center justify-between rounded-full bg-transparent hover:bg-background-4 shadow-none ${
                            selectedSubCategory?.value === subCat.value
                              ? "bg-background-4"
                              : ""
                          }`}
                          onClick={() => {
                            setSelectedSubCategory(subCat);
                            setShowAllParentCategories(false);
                          }}>
                          <span className="font-normal">{subCat.value}</span>
                        </Button>
                      );
                    })}
                  </div>
                )}
            </div>
          </PopoverContent>
        </Popover>
        <div className="p-1 w-11 h-11">
          <Button
            size="icon"
            className="rounded-full bg-main-primary hover:bg-main-primary w-10 h-10"
            onClick={() => {
              const newProductsList = generateProductsList(
                selectedCategory,
                selectedSubCategory || undefined,
                searchQuery,
                priceRange
              );
              setProductsList(newProductsList);
            }}>
            <IoSearchOutline className="!w-6 !h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchAndCategory;
