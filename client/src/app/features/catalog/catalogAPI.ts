import { createApi} from "@reduxjs/toolkit/query/react";
import type { Product } from "../../models/product";
import { baseQueryWithErrorHandling } from "../../api/baseApi";

export const catalogAPI = createApi({
  reducerPath: "catalog",
  baseQuery: baseQueryWithErrorHandling,
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => ({ url: "product" }),
    }),
    fetchProductsDetails: builder.query<Product, number>({
      query: (productId) => `product/${productId}`,
    }),
  }),
});

export const { useFetchProductsQuery, useFetchProductsDetailsQuery } =catalogAPI;
