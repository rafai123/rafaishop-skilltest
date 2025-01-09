import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductsResponse } from "./useGetProducts";

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
