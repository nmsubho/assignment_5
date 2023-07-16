import { useGetBooksQuery } from "../redux/features/book/bookApi";
import BookCard from "../components/ui/BookCard";

const Books = () => {
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold capitalize lg:text-4xl ">
          From the blog
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {data?.data?.map((book: any) => (
            <BookCard book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
