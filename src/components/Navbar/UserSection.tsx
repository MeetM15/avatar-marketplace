"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaBars, FaCircleUser } from "react-icons/fa6";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FiGlobe } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useMarketplace } from "@/lib/context/useMarketplace";
import { languagesData } from "@/data/languages";
import Image from "next/image";
import { Separator } from "../ui/separator";

const UserSection = () => {
  const {
    isLanguageDropdownOpen,
    setIsLanguageDropdownOpen,
    isProfileDropdownOpen,
    setIsProfileDropdownOpen,
    selectedLanguage,
    setSelectedLanguage,
  } = useMarketplace();
  return (
    <div className="flex items-center gap-6 h-12">
      <Button variant="link" size="icon" className="text-white w-max">
        List your creation
      </Button>
      <Popover
        open={isLanguageDropdownOpen}
        onOpenChange={(isOpen) => setIsLanguageDropdownOpen(isOpen)}>
        <PopoverTrigger asChild>
          <FiGlobe
            className="!w-5 !h-5 cursor-pointer"
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
          />
        </PopoverTrigger>
        <PopoverContent className="w-[203px] rounded-lg p-1.5 bg-background-2">
          {languagesData.map((language, index) => (
            <Button
              key={index}
              className={`flex items-center gap-2.5 px-1.5 bg-transparent hover:bg-background-3 shadow-none w-full justify-start  ${
                selectedLanguage === language.value ? "bg-background-4" : ""
              }`}
              onClick={() => {
                setSelectedLanguage(language.value);
                setIsLanguageDropdownOpen(false);
              }}>
              <Image
                src={language.image}
                alt={language.name}
                width={17}
                height={12}
              />
              {language.name}
            </Button>
          ))}
        </PopoverContent>
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
        <PopoverContent className="w-[220px] rounded-xl py-2.5 px-0 bg-background-2">
          <Button className="flex items-center bg-transparent hover:bg-background-3 shadow-none w-full text-dark-secondary justify-start text-sm px-2 rounded-none">
            Sign in
          </Button>
          <Button className="flex items-center bg-transparent hover:bg-background-3 shadow-none w-full text-dark-secondary justify-start text-sm px-2 rounded-none">
            Sign up
          </Button>
          <Separator className="w-full m-2 bg-light-gray" />
          <Button className="flex items-center bg-transparent hover:bg-background-3 shadow-none w-full text-dark-secondary justify-start text-sm px-2 rounded-none">
            List your item
          </Button>
          <Button className="flex items-center bg-transparent hover:bg-background-3 shadow-none w-full text-dark-secondary justify-start text-sm px-2 rounded-none">
            Message to Yuta(The founder)
          </Button>
        </PopoverContent>
      </Popover>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-transparent h-full w-12 hover:bg-background-3 text-dark-secondary hover:text-dark-secondary border-dark-secondary">
        <MdOutlineShoppingCart className="!w-6 !h-6" />
      </Button>
    </div>
  );
};

export default UserSection;
