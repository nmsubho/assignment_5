import { api } from "../../api/apiSlice";

const listApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToList: builder.mutation({
      query: ({ list, data }) => ({
        url: `/myList/${list}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["lists"],
    }),
    getList: builder.query({
      query: ({ list, uid }) => `/myList?list=${list}&uid=${uid}`,
      providesTags: ["lists"],
    }),
  }),
});

export const { useAddToListMutation, useGetListQuery } = listApi;
