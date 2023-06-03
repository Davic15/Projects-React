import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { products } from '../products/products';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl:
            'https://timely-muffin-9475be.netlify.app/.netlify/functions/api',
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => 'products',
        }),
    }),
});

export const { useGetAllProductsQuery } = productsApi;
