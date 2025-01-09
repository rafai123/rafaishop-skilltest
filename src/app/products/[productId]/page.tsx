"use client"

import { Skeleton } from "@/components/ui/skeleton";
import { useGetProduct } from "@/hooks/api/useGetProduct";
import { useParams } from "next/navigation";
import React from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  images: string[];
  category: string;
  sku: string;
  stock: number;
  availabilityStatus: string;
  discountPercentage: number;
  tags: string[];
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
  reviews: {
    reviewerName: string;
    comment: string;
    date: string;
  }[];
};


const ProductPreview = () => {

  const { productId } = useParams();
  console.log(productId);

  const productQuery = useGetProduct(productId as string);
  console.log(productQuery);

  const isLoading = productQuery.isLoading || productQuery.isError;
  const product = productQuery.data as Product | undefined;
  console.log(product)


    if (isLoading) {
      return (
        <div className="p-6 bg-gray-100">
          <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4">
                <Skeleton className="w-full h-64 rounded-lg" />
                <div className="flex space-x-2 mt-4">
                  <Skeleton className="w-20 h-20 rounded-md" />
                  <Skeleton className="w-20 h-20 rounded-md" />
                  <Skeleton className="w-20 h-20 rounded-md" />
                </div>
              </div>
  
              <div className="p-4 space-y-4">
                <Skeleton className="w-3/4 h-8 rounded-md" />
                <Skeleton className="w-1/4 h-4 rounded-md" />
                <Skeleton className="w-full h-6 rounded-md" />
                <Skeleton className="w-1/2 h-8 rounded-md" />
                <Skeleton className="w-1/3 h-4 rounded-md" />
                <div className="flex space-x-2">
                  <Skeleton className="w-12 h-6 rounded-md" />
                  <Skeleton className="w-12 h-6 rounded-md" />
                </div>
              </div>
            </div>
  
            <div className="p-4">
              <Skeleton className="w-1/3 h-6 rounded-md mb-4" />
              <Skeleton className="w-full h-16 rounded-md mb-4" />
              <Skeleton className="w-full h-16 rounded-md" />
            </div>
  
            <div className="p-4 bg-gray-50 rounded-b-lg">
              <Skeleton className="w-full h-4 rounded-md mb-2" />
              <Skeleton className="w-full h-4 rounded-md mb-2" />
              <Skeleton className="w-full h-4 rounded-md mb-2" />
              <Skeleton className="w-full h-4 rounded-md" />
            </div>
          </div>
        </div>
      );
    }

  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-4">
            <img
              src={product?.thumbnail}
              alt={product?.title}
              className="rounded-lg w-full h-auto"
            />
            <div className="flex space-x-2 mt-4">
              {product?.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-md border"
                />
              ))}
            </div>
          </div>

          <div className="p-4 space-y-4">
            <h1 className="text-2xl font-bold">{product?.title}</h1>
            <p className="text-sm text-gray-500">{product?.category}</p>
            <p className="text-lg text-gray-700">{product?.description}</p>
            <p className="text-xl font-bold text-rafaishop-secondary">
              Rp. {Math.round((product!.price / (1 - product!.discountPercentage / 100) * product!.discountPercentage * 14000)).toLocaleString("id-ID")}
              <span className="line-through text-gray-400 text-sm">
                Rp. {Math.round(product!.price * 14000).toLocaleString("id-ID")}
              </span>
            </p>
            <p className={`text-sm ${product!.stock > 0 ? "text-rafaishop-primary" : "text-red-600"}`}>
              {product!.availabilityStatus}
            </p>
            <p className="text-sm text-gray-600">SKU: {product?.sku }</p>
            <div className="flex space-x-2">
              {product!.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 px-2 py-1 rounded-md text-sm text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-xl font-bold">Reviews</h2>
          <div className="space-y-4 mt-4">
            {product?.reviews.map((review, index) => (
              <div key={index} className="p-4 bg-[#F3F4FE] rounded-md">
                <p className="font-bold">{review.reviewerName}</p>
                <p className="text-sm text-gray-600">{review.comment}</p>
                <p className="text-xs text-gray-400">{new Date(review.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-b-lg">
          <p>Weight: {product?.weight} kg</p>
          <p>Dimensions: {product?.dimensions.width} x {product?.dimensions.height} x {product?.dimensions.depth} cm</p>
          <p>Warranty: {product?.warrantyInformation}</p>
          <p>Return Policy: {product?.returnPolicy}</p>
          <p>Minimum Order Quantity: {product?.minimumOrderQuantity}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
