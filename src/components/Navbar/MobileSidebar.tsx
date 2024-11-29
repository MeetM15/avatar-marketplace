"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Button } from "../ui/button";
import { useMarketplace } from "@/lib/context/useMarketplace";
import { Separator } from "../ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { languagesData } from "@/data/languages";
import Image from "next/image";

const MobileSidebar = () => {
  const {
    setShowMobileMenu,
    showMobileMenu,
    selectedLanguage,
    setSelectedLanguage,
  } = useMarketplace();
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-transparent hover:bg-background-3 text-dark-secondary hover:text-dark-secondary w-10 h-10 border-dark-secondary"
        onClick={() => setShowMobileMenu((prev) => !prev)}>
        <IoMenu className="!w-6 !h-6" />
      </Button>
      {showMobileMenu && (
        <div className="flex flex-col gap-6 h-screen w-screen bg-background fixed top-0 right-0 px-4 py-6">
          <Button
            className="flex items-center gap-1 bg-transparent hover:bg-background-3 shadow-none w-full text-dark-secondary justify-start text-sm p-0 rounded-none"
            onClick={() => {
              setShowMobileMenu((prev) => !prev);
            }}>
            <ChevronLeft />
            <span>Go back</span>
          </Button>
          {showLanguageOptions ? (
            <div className="flex flex-col">
              {languagesData.map((language, index) => (
                <Button
                  key={index}
                  className={`flex items-center gap-2.5 px-1.5 bg-transparent hover:bg-background-3 shadow-none w-full justify-start  ${
                    selectedLanguage === language.value ? "bg-background-4" : ""
                  }`}
                  onClick={() => {
                    setSelectedLanguage(language.value);
                    setShowLanguageOptions(false);
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
            </div>
          ) : (
            <>
              <div className="font-medium text-xl">Hello,</div>
              <div>
                <div className="font-medium text-xl py-4">Shopping</div>
                <Button className="flex items-center bg-transparent hover:bg-background-3 shadow-none w-full text-dark-secondary justify-between text-sm px-0 py-1 rounded-none">
                  <div className="flex items-center gap-2.5">
                    <MdOutlineShoppingCart className="!w-6 !h-6" />
                    <span className="text-sm">Your Cart</span>
                  </div>
                  <ChevronRight className="!w-5 !h-5" />
                </Button>
                <Separator className="w-full my-2 bg-light-gray" />
                <div className="font-medium text-xl py-4">Your account</div>
                <Button className="flex items-center bg-transparent hover:bg-background-3 shadow-none w-full text-dark-secondary justify-between text-sm px-0 py-1 rounded-none">
                  <span className="text-sm">Sign in</span>
                  <ChevronRight className="!w-5 !h-5" />
                </Button>
                <Button className="flex items-center bg-transparent hover:bg-background-3 shadow-none w-full text-dark-secondary justify-between text-sm px-0 py-1 rounded-none">
                  <span className="text-sm">Sign up</span>
                  <ChevronRight className="!w-5 !h-5" />
                </Button>
                <Separator className="w-full my-2 bg-light-gray" />
                <div className="font-medium text-xl py-4">Support</div>
                <Button className="flex items-center bg-transparent hover:bg-background-3 shadow-none w-full text-dark-secondary justify-between text-sm px-0 py-1 rounded-none">
                  <span className="text-sm">Message to Yuta(The founder)</span>
                  <ChevronRight className="!w-5 !h-5" />
                </Button>
                <Separator className="w-full my-2 bg-light-gray" />
                <div className="font-medium text-xl py-4">Language</div>
                <Button
                  className="flex items-center bg-transparent hover:bg-background-3 shadow-none w-full text-dark-secondary justify-between text-sm px-0 py-1 rounded-none"
                  onClick={() => setShowLanguageOptions(true)}>
                  <span className="text-sm">
                    {languagesData.find(
                      (language) => language.value === selectedLanguage
                    )?.name || "English(US)"}
                  </span>
                  <ChevronRight className="!w-5 !h-5" />
                </Button>
                <Separator className="w-full my-2 bg-light-gray" />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default MobileSidebar;
