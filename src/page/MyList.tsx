/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  useAddToListMutation,
  useGetListQuery,
} from "../redux/features/list/listApi";
import { useAppSelector } from "../redux/hooks";
import { toast } from "react-hot-toast";

const MyList = () => {
  const [list, setList] = useState("");

  const { user } = useAppSelector((state) => state.user);

  const [addToList, { isSuccess: isAddToListSuccess }] = useAddToListMutation();

  const { data: wishlist } = useGetListQuery({
    list: "wishlist",
    uid: user.uid,
  });
  const { data: reading } = useGetListQuery({
    list: "reading",
    uid: user.uid,
  });
  const { data: completed } = useGetListQuery({
    list: "completed",
    uid: user.uid,
  });

  const handleAddToList = (list: string, id: string) => {
    setList(list);
    addToList({ list, data: { uid: user.uid, bookId: id } });
  };

  useEffect(() => {
    if (isAddToListSuccess) {
      toast.success(`Added to ${list}!`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAddToListSuccess]);

  return (
    <>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl">WishList</h1>
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-3">
          {wishlist?.data?.map((book: any) => (
            <div className="text-center">
              <img
                className="object-cover w-full h-28 rounded-lg lg:w-64 mx-auto"
                src="https://source.unsplash.com/random/300×300/?book-cover"
                alt=""
              />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <p className="text-xl font-semibold hover:underline m-0">
                  {book.book.title}
                </p>
                <p>Author: {book.book.author}</p>
                <div className="flex justify-center">
                  <button
                    className=" bg-orange-400 text-gray-200  p-2 mx-2 px-5 rounded  hover:bg-orange-500 hover:text-gray-100 inline-block"
                    onClick={() => handleAddToList("reading", book.book._id)}
                  >
                    + Reading List
                  </button>
                  <button
                    className=" bg-orange-400 text-gray-200  p-2 mx-2 px-5 rounded  hover:bg-orange-500 hover:text-gray-100 inline-block"
                    onClick={() => handleAddToList("completed", book.book._id)}
                  >
                    + Completed
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl">Reading</h1>
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-3">
          {reading?.data?.map((book: any) => (
            <div className="text-center">
              <img
                className="object-cover w-full h-28 rounded-lg lg:w-64 mx-auto"
                src="https://source.unsplash.com/random/300×300/?book-cover"
                alt=""
              />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <p className="text-xl font-semibold hover:underline m-0">
                  {book.book.title}
                </p>
                <p>Author: {book.book.author}</p>
                <div className="flex justify-center">
                  <button
                    className=" bg-orange-400 text-gray-200  p-2 mx-2 px-5 rounded  hover:bg-orange-500 hover:text-gray-100 inline-block"
                    onClick={() => handleAddToList("wishlist", book.book._id)}
                  >
                    + Wishlist
                  </button>
                  <button
                    className=" bg-orange-400 text-gray-200  p-2 mx-2 px-5 rounded  hover:bg-orange-500 hover:text-gray-100 inline-block"
                    onClick={() => handleAddToList("completed", book.book._id)}
                  >
                    + Completed
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl">Completed</h1>
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-3">
          {completed?.data?.map((book: any) => (
            <div className="text-center">
              <img
                className="object-cover w-full h-28 rounded-lg lg:w-64 mx-auto"
                src="https://source.unsplash.com/random/300×300/?book-cover"
                alt=""
              />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <p className="text-xl font-semibold hover:underline m-0">
                  {book.book.title}
                </p>
                <p>Author: {book.book.author}</p>
                <div className="flex justify-center">
                  <button
                    className=" bg-orange-400 text-gray-200  p-2 mx-2 px-5 rounded  hover:bg-orange-500 hover:text-gray-100 inline-block"
                    onClick={() => handleAddToList("wishlist", book.book._id)}
                  >
                    + Wishlist
                  </button>
                  <button
                    className=" bg-orange-400 text-gray-200  p-2 mx-2 px-5 rounded  hover:bg-orange-500 hover:text-gray-100 inline-block"
                    onClick={() => handleAddToList("reading", book.book._id)}
                  >
                    + Reading List
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyList;
