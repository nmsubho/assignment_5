import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (data) => ({
        url: "/book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
      providesTags: ["book"],
    }),

    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),

    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    getReview: builder.query({
      query: (id) => `/review/${id}`,
      providesTags: ["reviews"],
    }),
  }),
});

export const {
  useAddBookMutation,
  useGetBooksQuery,
  useSingleBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useGetReviewQuery,
  usePostReviewMutation,
} = bookApi;
