import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../redux/features/book/bookApi";
import BookReview from "../components/BookReview";
import { toast } from "react-hot-toast";

const BookDetails = () => {
  const { id } = useParams();

  const { data: book, isSuccess, isLoading, isError } = useSingleBookQuery(id);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 mt-3 pb-2">
        <div className="w-[50%]">
          <img
            className="object-cover w-full h-56 rounded-lg lg:w-64"
            src="https://source.unsplash.com/random/300×300/?book-cover"
            alt=""
          />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="text-xl">Author: {book?.author}</p>
          <p className="text-xl">Genre: {book?.genre}</p>
          <p className="text-xl">Publication Date: {book?.publicationDate}</p>
          <button className=" text-red-700">Add to Wishlist</button>
        </div>
      </div>
      <BookReview id={id!} addedBy={book?.addedBy} />
    </>
  );
};

export default BookDetails;
