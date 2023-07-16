/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetBooksQuery,
  useGetGenresQuery,
  useGetPublicationYearsQuery,
} from "../redux/features/book/bookApi";
import BookCard from "../components/ui/BookCard";
import { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [genre, setGenre] = useState("");

  const { data, isLoading, error } = useGetBooksQuery({
    searchTerm,
    publicationYear,
    genre,
  });
  const { data: genres } = useGetGenresQuery(undefined);
  const { data: publicationYears } = useGetPublicationYearsQuery(undefined);

  useEffect(() => {
    setBooks(data?.data);
  }, [data]);

  const onSearch = (event: any) => {
    event.preventDefault();
    const { searchText } = event.target;
    setSearchTerm(searchText.value);
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section>
      <form className="mt-10 flex justify-center" onSubmit={onSearch}>
        <input
          type="text"
          name="searchText"
          placeholder="Search..."
          className="px-4 py-2 bg-gray-50"
        />
        <button
          className="bg-orange-500 text-gray-200  p-2 mx-2 rounded  hover:bg-orange-600 hover:text-gray-100 inline-block"
          type="submit"
        >
          Search
        </button>
      </form>

      <div className="text-center mt-3">
        <select
          className="px-4 py-2 bg-gray-50 mx-2"
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">Select Genre...</option>
          {genres?.map((genre: string) => (
            <option value={genre}>{genre}</option>
          ))}
        </select>
        <select
          className="px-4 py-2 bg-gray-50 mx-2"
          onChange={(e) => setPublicationYear(e.target.value)}
        >
          <option value="">Select Year...</option>
          {publicationYears?.map((publicationYear: string) => (
            <option value={publicationYear}>{publicationYear}</option>
          ))}
        </select>
      </div>

      <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {books?.map((book: any) => (
            <BookCard book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
