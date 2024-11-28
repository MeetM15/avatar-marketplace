"use client";
import StarRatings from "@/components/common/StarRatings";
import { Button } from "@/components/ui/button";
import { productsData } from "@/data/products";
import { Product } from "@/types";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";

const ProductsDetails = () => {
  const router = useRouter();
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const foundProduct = productsData.find((p) => {
      return p.id === productId;
    });
    if (foundProduct) setProduct(foundProduct);
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="bg-background text-foreground min-h-screen w-full pt-20 flex items-start justify-center">
      <div className="px-4 md:px-10 xl:px-20 py-4 flex flex-col items-center justify-center w-max min-w-[1024px] gap-8">
        <div className="flex items-center justify-start w-full">
          <Button
            className="bg-dark-secondary hover:bg-dark-secondary text-[#1B0809] hover:text-[#1B0809] text-base font-normal w-[181px]"
            onClick={() => {
              router.push("/");
            }}>
            <IoArrowBack /> Back
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-8 w-full">
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center w-80 aspect-square bg-background-3 rounded-xl text-base">
              <span>{`${product.category.name}`}</span>
              <span>{`>${product.subcategory.name}`}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Category:</span>
              <span className="text-sm font-medium">
                {product.category.name}
              </span>
              <span className="text-sm text-gray-500">Subcategory:</span>
              <span className="text-sm font-medium">
                {product.subcategory.name}
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
            <div className="flex items-center space-x-2">
              <div className="flex">
                <StarRatings
                  rating={
                    product.reviews.reduce(
                      (acc, review) => acc + review.rating,
                      0
                    ) / product.reviews.length
                  }
                />
              </div>
              <span className="text-sm text-gray-500">
                ({product.reviews.length} reviews)
              </span>
            </div>
            <p className="text-gray-600">{product.details}</p>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Created by:</p>
              <p className="font-medium">{product.creator}</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          <div className="space-y-4">
            {product.reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{review.user}</span>
                  <div className="flex">
                    <StarRatings rating={review.rating} />
                  </div>
                </div>
                <p className="mt-2 text-gray-600">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
