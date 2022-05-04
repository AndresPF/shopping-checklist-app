import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TList, TListItem, TPopulatedList } from '../components/types';

export const shopApi = createApi({
  reducerPath: 'lists',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3200/api/',
  }),
  endpoints: (builder) => ({
    getLists: builder.query<TList[], void>({
      query: () => `lists`,
    }),
    getList: builder.query<TPopulatedList, string>({
      query: (id: string) => `lists/${id}`,
    }),
    addList: builder.mutation<void, TList['title']>({
      query: (title) => ({
        url: `lists`,
        method: 'POST',
        body: { title },
      }),
    }),
    updateList: builder.mutation<void, TList>({
      query: ({ _id, ...rest }) => ({
        url: `lists/${_id}`,
        method: 'PATCH',
        body: rest,
      }),
    }),
    deleteList: builder.mutation<void, TList['_id']>({
      query: (id) => ({
        url: `lists/${id}`,
        method: 'DELETE',
      }),
    }),
    addItem: builder.mutation<
      void,
      Pick<TListItem, 'title' | 'quantity'> & { id: string }
    >({
      query: ({ title, quantity, id }) => ({
        url: `items`,
        method: 'POST',
        body: { title, quantity, listId: id },
      }),
    }),
    updateItem: builder.mutation<void, Partial<TListItem>>({
      query: ({ _id, ...rest }) => ({
        url: `items/${_id}`,
        method: 'PATCH',
        body: rest,
      }),
    }),
    deleteItem: builder.mutation<void, TListItem['_id']>({
      query: (id) => ({
        url: `items/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetListsQuery,
  useGetListQuery,
  useAddListMutation,
  useUpdateListMutation,
  useDeleteListMutation,
  useAddItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = shopApi;
