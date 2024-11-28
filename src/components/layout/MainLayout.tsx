"use client";
import React from "react";
import { MarketplaceProvider } from "@/lib/context/useMarketplace";
import Navbar from "@/components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MarketplaceProvider>
      <Navbar />
      {children}
    </MarketplaceProvider>
  );
};

export default MainLayout;
