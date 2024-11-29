"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import SearchAndCategory from "../Navbar/SearchAndCategory";
import UserSection from "../Navbar/UserSection";
import ProductFilters from "../Navbar/ProductFilters";
import { useMarketplace } from "@/lib/context/useMarketplace";
import MobileSidebar from "../Navbar/MobileSidebar";

const Navbar = () => {
  const router = useRouter();
  const { currentScreen, isBottomNavVisible } = useMarketplace();

  return (
    <>
      <nav
        className={`h-20 sticky top-0 w-full border-b border-light-gray px-4 md:px-10 xl:px-20 items-center justify-between gap-4 md:gap-10 bg-background text-foreground flex`}>
        {currentScreen === "tablet" ? (
          isBottomNavVisible ? (
            <Image
              src="/logo.png"
              alt="Brand Logo"
              width={170}
              height={32}
              priority
              onClick={() => {
                router.push("/");
              }}
              className="cursor-pointer hidden md:block"
            />
          ) : (
            <div className="flex items-center h-12 gap-2">
              <SearchAndCategory />
              <ProductFilters />
            </div>
          )
        ) : (
          <>
            <Image
              src="/logo.png"
              alt="Brand Logo"
              width={170}
              height={32}
              priority
              onClick={() => {
                router.push("/");
              }}
              className="cursor-pointer hidden md:block"
            />
            <div className="flex items-center h-12 gap-2">
              <SearchAndCategory />
              {currentScreen === "desktop" && <ProductFilters />}
            </div>
          </>
        )}
        {currentScreen === "mobile" ? <MobileSidebar /> : <UserSection />}
      </nav>
      {currentScreen === "tablet" && (
        <nav
          className={`h-20 w-full border-b border-light-gray px-4 md:px-10 xl:px-20 items-center justify-center bg-background text-foreground transition-transform duration-300 hidden md:flex lg:hidden ${
            isBottomNavVisible ? "translate-y-0" : "-translate-y-full"
          }`}>
          {isBottomNavVisible && (
            <div className="flex items-center h-12 gap-2">
              <SearchAndCategory />
              <ProductFilters />
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
