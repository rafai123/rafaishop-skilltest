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

export const useGetProduct = (idProduct?: number | string) => {
  const queryClient = useQuery<ProductsResponse[]>({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await axios.get(`https://dummyjson.com/products/${idProduct}`);

      if (!response) {
        throw new Error("error");
      }

      console.log(response.data)

      return response.data;
    },
  });

  return queryClient;
};
