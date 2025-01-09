import { useGetProducts } from "@/hooks/api/useGetProducts";
import React from "react";
import { Skeleton } from "./ui/skeleton";

const ProductsSection = () => {

  const productsQuery = useGetProducts(8)
  const products = productsQuery.data || []
  console.log(products)

  const disabled = productsQuery.isLoading || productsQuery.isError

  if (disabled) {
    // skeleton loading from shadcn with same size
    return (
      <>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="border shadow rounded-lg ">
          <div className="w-full h-40">
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

  return (
    <>
    {products?.map((product) => (
      <div
        key={product.id}
        className="bg-white border border-gray-200 shadow-md rounded-lg w-56 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        {/* Gambar Produk */}
        <div className="relative h-44 rounded-t-lg overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Konten Produk */}
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {product.title}
          </h3>
          <p className="text-sm text-gray-600">{product.description.slice(0, 50)}...</p>
          <p className="text-lg font-bold text-blue-600">
            Rp. {Math.round(product.price * 14000).toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    ))}
  </>
  );
};

export default ProductsSection;
