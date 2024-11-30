"use client";
import React from "react";
import { MarketplaceProvider } from "@/lib/context/useMarketplace";
import Navbar from "@/components/layout/Navbar";
import { usePathname } from "next/navigation";
import { AuthRoute } from "@/constants";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  return pathName === AuthRoute ? (
    children
  ) : (
    <MarketplaceProvider>
      <Navbar />
      {children}
    </MarketplaceProvider>
  );
};

export default MainLayout;
