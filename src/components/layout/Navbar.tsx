"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaBars, FaCircleUser, FaSliders } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoSearchOutline } from "react-icons/io5";
import { FiGlobe } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useMarketplace } from "@/lib/context/useMarketplace";
import { Categories } from "@/types";
import { ChevronRight } from "lucide-react";
import { categoryData, defaultCategory } from "@/data/categories";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const {
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
    generateProductsList,
    setProductsList,
  } = useMarketplace();

  return (
    <div className="h-20 fixed top-0 w-full border-b border-light-gray px-4 md:px-10 xl:px-20 flex items-center justify-between bg-background text-foreground">
      <Image
        src="/logo.png"
        alt="Brand Logo"
        width={170}
        height={32}
        priority
        onClick={() => {
          router.push("/");
        }}
        className="cursor-pointer"
      />
      <div className="flex items-center h-12 gap-2">
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
                              <span className="font-normal">
                                {subCat.value}
                              </span>
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
                    searchQuery
                  );
                  setProductsList(newProductsList);
                }}>
                <IoSearchOutline className="!w-6 !h-6" />
              </Button>
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-transparent hover:bg-background-3 text-dark-secondary hover:text-dark-secondary w-10 h-10 border-dark-secondary">
          <FaSliders className="!w-6 !h-6" />
        </Button>
      </div>
      <div className="flex items-center gap-2 h-12">
        <Button variant="link" size="icon" className="text-white w-max">
          List your creation
        </Button>
        <Popover
          open={isLanguageDropdownOpen}
          onOpenChange={(isOpen) => setIsLanguageDropdownOpen(isOpen)}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`hover:bg-background-3 text-dark-secondary h-full hover:text-dark-secondary ${
                isLanguageDropdownOpen ? "bg-background-3" : "bg-transparent"
              }`}
              onClick={() =>
                setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
              }>
              <FiGlobe className="!w-5 !h-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">Language List</PopoverContent>
        </Popover>
        <Popover
          open={isProfileDropdownOpen}
          onOpenChange={(isOpen) => setIsProfileDropdownOpen(isOpen)}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className={`hover:bg-background-3 px-2 text-dark-secondary h-full w-max rounded-full bg-transparent border-dark-secondary hover:text-dark-secondary ${
                isProfileDropdownOpen ? "bg-background-3" : "bg-transparent"
              }`}
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
              <div className="flex items-center gap-2.5">
                <FaBars className="!w-4 !h-4" />
                <FaCircleUser className="!w-8 !h-8 p-1" />
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">Profile Data</PopoverContent>
        </Popover>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-transparent h-full w-12 hover:bg-background-3 text-dark-secondary hover:text-dark-secondary border-dark-secondary">
          <MdOutlineShoppingCart className="!w-6 !h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
