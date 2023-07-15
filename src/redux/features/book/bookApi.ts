import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (data) => ({
        url: "/book",
        method: "POST",
        body: data,
      }),
    }),
    getBooks: builder.query({
      query: () => "/books",
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ["reviews"],
    }),
  }),
});

export const {
  useAddBookMutation,
  useGetCommentQuery,
  useGetBooksQuery,
  usePostCommentMutation,
  useSingleBookQuery,
} = bookApi;
