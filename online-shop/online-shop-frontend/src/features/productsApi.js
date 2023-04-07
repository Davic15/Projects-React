import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' ;
import { products } from '../products/products';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://backend-onlineshop-production-ba55.up.railway.app' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => 'products'
        })
    })
})

export const { useGetAllProductsQuery } = productsApi