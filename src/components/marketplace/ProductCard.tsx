"use client";
import { Product } from "@/types";
import React from "react";
import StarRatings from "../common/StarRatings";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col gap-2 cursor-pointer"
      onClick={() => {
        router.push(`/${product.id}`);
      }}>
      <div className="flex flex-col items-center justify-center w-full aspect-square bg-background-3 rounded-xl text-base">
        <span>{`${product.category.name}`}</span>
        <span>{`>${product.subcategory.name}`}</span>
      </div>
      <div className="flex flex-col">
        <p className="font-[700] text-dark-secondary text-sm">{product.name}</p>
        <p className="text-dark-gray text-sm">{product.creator}</p>
        <StarRatings
          rating={
            product.reviews.reduce((acc, review) => acc + review.rating, 0) /
            product.reviews.length
          }
        />
        <p className="font-[700] text-dark-secondary text-sm">{`$ ${product.price}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
