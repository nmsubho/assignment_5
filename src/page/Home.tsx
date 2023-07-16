/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useGetBooksQuery } from "../redux/features/book/bookApi";

const Home = () => {
  const [books, setBooks] = useState([]);

  const { data, isLoading, error } = useGetBooksQuery({});

  useEffect(() => {
    setBooks(data?.data);
  }, [data]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="container px-6 py-10 mx-auto">
      <h1 className="text-2xl">New Books</h1>
      <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
        {books?.slice(0, 10)?.map((book: any) => (
          <div className="lg:flex">
            <img
              className="object-cover w-full h-28 rounded-lg lg:w-64"
              src="https://source.unsplash.com/random/300×300/?book-cover"
              alt=""
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <p className="text-xl font-semibold hover:underline m-0">
                {book.title}
              </p>
              <p>Author: {book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
