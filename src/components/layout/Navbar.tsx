"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import SearchAndCategory from "../Navbar/SearchAndCategory";
import UserSection from "../Navbar/UserSection";
import ProductFilters from "../Navbar/ProductFilters";
const Navbar = () => {
  const router = useRouter();

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
        <SearchAndCategory />
        <ProductFilters />
      </div>
      <UserSection />
    </div>
  );
};

export default Navbar;
