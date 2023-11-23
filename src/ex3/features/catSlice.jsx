import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from "axios";

// Define a service using a base URL and expected endpoints
export const catApi = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.thecatapi.com/v1' }),
  endpoints: (builder) => ({
    getCatImg: 
        builder.query (
            {query: () => '/images/search'}
        )
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCatImgQuery } = catApi