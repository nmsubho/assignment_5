import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import {
  useDeleteBookMutation,
  useGetReviewQuery,
  usePostReviewMutation,
} from "../redux/features/book/bookApi";
import { useAppSelector } from "../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

interface IProps {
  id: string;
  addedBy: string;
}

const BookReview = ({ id, addedBy }: IProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const navigate = useNavigate();

  const { data } = useGetReviewQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const { user } = useAppSelector((state) => state.user);

  const [postReview] = usePostReviewMutation();
  const [deleteBook, { isSuccess }] = useDeleteBookMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputValue) {
      toast.error("Review can not be empty!");
      return;
    }

    const options = {
      id: id,
      data: { review: inputValue },
    };

    postReview(options);
    setInputValue("");
  };
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleDelete = async () => {
    const confirmStatus = confirm("Want to delete?");
    if (confirmStatus) {
      const result = await deleteBook(id);
      if ("data" in result && result?.data?.acknowledged) {
        navigate("/books");
      }
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.error("Book deleted successfully!");
    }
  }, [isSuccess]);

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex justify-between">
        {user.uid && (
          <form className="flex items-center w-[50%]" onSubmit={handleSubmit}>
            <textarea
              className="border w-full p-1"
              placeholder="Write your review..."
              rows={5}
              onChange={handleChange}
              value={inputValue}
            />
            <button
              type="submit"
              className="bg-blue-600 text-gray-200  p-2 mx-1 rounded  hover:bg-blue-500 hover:text-gray-100 inline-block"
            >
              Submit
            </button>
          </form>
        )}
        {user.uid === addedBy && (
          <div>
            <Link to={`/edit-book/${id}`}>
              <button className=" bg-orange-400 text-gray-200  p-2 mx-2 px-5 rounded  hover:bg-orange-500 hover:text-gray-100 inline-block">
                Edit
              </button>
            </Link>

            <button
              className="bg-red-500 text-gray-200  p-2 mx-2 rounded  hover:bg-red-600 hover:text-gray-100 inline-block"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>

      <div className="mt-10">
        {data?.reviews?.map((review: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <span
              className={`border-2 ${
                index % 2 === 0
                  ? "border-blue-400 bg-blue-400"
                  : "border-red-300 bg-red-300"
              } px-1`}
              style={{ borderRadius: "50%" }}
            >
              U
            </span>
            <p>{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookReview;
