"use client";
import { useParams } from "next/navigation";
import React from "react";

const ProductsDetails = () => {
  const { productId } = useParams();
  return (
    <div className="bg-background text-foreground min-h-screen w-full pt-20">
      ProductsDetails:{productId}
    </div>
  );
};

export default ProductsDetails;
