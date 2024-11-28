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
  } = useMarketplace();
  return (
    <div className="bg-background-2 rounded-full h-full flex items-center">
      <div
        className={`rounded-full h-full pl-8 py-[3px] justify-center flex flex-col text-dark-gray w-[264px] ${
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
        className={`rounded-full pl-8 h-full flex items-center gap-1 text-dark-gray w-[264px] ${
          isCategoryDropdownOpen ? "bg-background-3" : "bg-background-2"
        }`}>
        <Popover
          open={isCategoryDropdownOpen}
          onOpenChange={(isOpen) => setIsCategoryDropdownOpen(isOpen)}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="grow bg-transparent hover:bg-transparent px-0 py-[3px] h-full"
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
            className="w-[444px] h-[352px] rounded-[32px] p-4 bg-background-3"
            align="end"
            alignOffset={-52}
            sideOffset={16}>
            <div className="flex gap-1.5">
              <div className="h-full">
                {categoryData.map((cat) => {
                  return (
                    <Button
                      key={cat.value}
                      className={`w-[200px] h-10 flex items-center justify-between rounded-full bg-transparent hover:bg-background-4 shadow-none ${
                        selectedCategory.value === cat.value
                          ? "bg-background-4"
                          : ""
                      }`}
                      onClick={() => {
                        setSelectedCategory(cat);
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
              <Separator orientation="vertical" className="bg-light-gray" />
              {selectedCategory?.subcategories &&
                selectedCategory.subcategories.length > 0 && (
                  <div className="h-full">
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
        <div className="p-1">
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
