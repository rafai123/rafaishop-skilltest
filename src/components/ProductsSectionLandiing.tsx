"use client"

import { useGetProducts } from "@/hooks/api/useGetProducts";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useMedia } from "react-use";
import Link from "next/link";


const ProductsSection = ({swiper, total, searchQuery}: {swiper?: boolean, total: number, searchQuery?: string}) => {

  const productsQuery = useGetProducts(total, searchQuery)
  const products = productsQuery.data || []
  console.log(products)

  const isMobile = useMedia("(max-width: 640px)", false)
  const isTab = useMedia("(max-width: 764px)", false)

  const disabled = productsQuery.isLoading || productsQuery.isError

  if (disabled) {
    return (
      <>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="border shadow rounded-lg ">
          <div className="w-32 md:w-56 h-40">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="px-2 py-4">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </>
    )
  }

  if (swiper) {
    
    return (
      <>
      <Swiper
          slidesPerView={isMobile ? 2 : isTab ? 3 : 4}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
      {products?.map((product) => (
        <SwiperSlide key={product.id}>
        <Link
          href={`/products/${product.id}`}
          key={product.id}
          className="bg-white border border-gray-200 shadow-md rounded-lg w-32 md:w-40 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div className="relative h-28 md:h-40 rounded-t-lg overflow-hidden">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
  
          <div className="p-4 space-y-2">
            <h3 className="text-base md:text-lg font-semibold text-gray-800 truncate">
              {product.title}
            </h3>
            <p className="text-sm md:text-sm text-gray-600">{product.description.slice(0, 50)}...</p>
            <p className="text-base md:text-lg font-semibold md:font-bold text-rafaishop-secondary">
              Rp. {Math.round(product.price * 14000).toLocaleString("id-ID")}
            </p>
          </div>
        </Link>
        </SwiperSlide>
      ))}
      </Swiper>
    </>
    );
  }

  return (
    <>
      {products?.map((product) => (
        <Link href={`/products/${product.id}`}
        key={product.id}
        className="bg-white border border-gray-200 shadow-md rounded-lg w-32 md:w-40 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        <div className="relative h-28 md:h-40 rounded-t-lg overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 space-y-2">
          <h3 className="text-base md:text-lg font-semibold text-gray-800 truncate">
            {product.title}
          </h3>
          <p className="text-sm md:text-sm text-gray-600">{product.description.slice(0, 50)}...</p>
          <p className="text-base md:text-lg font-semibold md:font-bold text-rafaishop-secondary">
            Rp. {Math.round(product.price * 14000).toLocaleString("id-ID")}
          </p>
        </div>
      </Link>
      ))}
    </>
  );
};

export default ProductsSection;
