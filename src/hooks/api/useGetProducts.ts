import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
};

export type ProductsResponse = {
  description: any;
  price: number;
  title: string;
  id: number | string | null | undefined;
  thumbnail: string | undefined;
  products: Product[];
  total: number;
  // skip: number;
  limit: number;
};

export const useGetProducts = (limit?: number) => {
  const queryClient = useQuery<ProductsResponse[]>({
    queryKey: ["menus"],
    queryFn: async () => {
      let limitQuery = limit ? `limit=${limit}&` : "" 
      const response = await axios.get(`https://dummyjson.com/products?${limitQuery}select=title,price,description,thumbnail`);

      if (!response) {
        throw new Error("error");
      }

      console.log(response.data.products)

      return response.data.products;
    },
  });

  return queryClient;
};
