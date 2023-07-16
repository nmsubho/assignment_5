import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (data) => ({
        url: "/book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["book"],
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
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
  useDeleteBookMutation,
  useGetReviewQuery,
  usePostReviewMutation,
} = bookApi;
