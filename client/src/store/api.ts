import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TListMock, TPopulatedListMock } from '../mocks/listMock';

export const shopApi = createApi({
  reducerPath: 'lists',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3200/api/',
  }),
  endpoints: (builder) => ({
    getLists: builder.query<TListMock[], void>({
      query: () => `lists`,
    }),
    getList: builder.query<TPopulatedListMock, string>({
      query: (id: string) => `lists/${id}`,
    }),
  }),
});

export const { useGetListsQuery, useGetListQuery } = shopApi;
