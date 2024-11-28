import { useMarketplace } from "@/lib/context/useMarketplace";
import React from "react";
import ProductCard from "./ProductCard";
import { defaultCategory } from "@/data/categories";

const Marketplace = () => {
  const { productsList, selectedCategory, selectedSubCategory } =
    useMarketplace();
  return (
    <div className="px-4 md:px-10 xl:px-20 py-4 flex flex-col gap-7">
      <h1 className="font-[700] text-[32px] leading-[38.4px]">
        {selectedSubCategory
          ? `${selectedCategory.name}>${selectedSubCategory.name}`
          : selectedCategory
          ? `${selectedCategory.name}`
          : defaultCategory.name}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-8">
        {productsList.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
