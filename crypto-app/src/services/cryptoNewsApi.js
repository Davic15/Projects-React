import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_URL_CRYPTO_NEWS
};

const baseUrl = process.env.REACT_APP_NEWS_API_BASE_URL;
const apiKey = process.env.REACT_APP_NEWS_API_KEY
const createRequest = (url) => {
    return baseUrl + url
}

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/search?q=${newsCategory}&lang=en&apikey=${apiKey}`),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;