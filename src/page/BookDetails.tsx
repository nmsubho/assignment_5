/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../redux/features/book/bookApi";
import BookReview from "../components/BookReview";
import { toast } from "react-hot-toast";
import { useAddToListMutation } from "../redux/features/list/listApi";
import { useAppSelector } from "../redux/hooks";

const BookDetails = () => {
  const { id } = useParams();
  const [list, setList] = useState("");

  const { user } = useAppSelector((state) => state.user);
  const { data: book, isLoading } = useSingleBookQuery(id);
  const [addToList, { isSuccess: isAddToListSuccess }] = useAddToListMutation();

  const handleAddToList = (list: string) => {
    setList(list);
    addToList({ list, data: { uid: user.uid, bookId: id } });
  };

  useEffect(() => {
    if (isAddToListSuccess) {
      toast.success(`Added to ${list}!`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAddToListSuccess]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 mt-16 mb-10 pb-2">
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
        </div>
      </div>
      {user.uid && (
        <div className="my-10 text-center">
          <button
            className=" bg-orange-400 text-gray-200  p-2 mx-2 px-5 rounded  hover:bg-orange-500 hover:text-gray-100 inline-block"
            onClick={() => handleAddToList("wishlist")}
          >
            Add to Wishlist
          </button>
          <button
            className=" bg-orange-400 text-gray-200  p-2 mx-2 px-5 rounded  hover:bg-orange-500 hover:text-gray-100 inline-block"
            onClick={() => handleAddToList("reading")}
          >
            Add to Reading List
          </button>
          <button
            className=" bg-orange-400 text-gray-200  p-2 mx-2 px-5 rounded  hover:bg-orange-500 hover:text-gray-100 inline-block"
            onClick={() => handleAddToList("completed")}
          >
            Add to Completed
          </button>
        </div>
      )}
      <BookReview id={id!} addedBy={book?.addedBy} />
    </>
  );
};

export default BookDetails;
