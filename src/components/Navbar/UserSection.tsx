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

const UserSection = () => {
  const {
    isLanguageDropdownOpen,
    setIsLanguageDropdownOpen,
    isProfileDropdownOpen,
    setIsProfileDropdownOpen,
  } = useMarketplace();
  return (
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
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}>
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
  );
};

export default UserSection;
