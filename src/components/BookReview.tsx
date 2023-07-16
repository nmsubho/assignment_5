import { ChangeEvent, FormEvent, useState } from "react";
import {
  useGetReviewQuery,
  usePostReviewMutation,
} from "../redux/features/book/bookApi";

interface IProps {
  id: string;
}

const BookReview = ({ id }: IProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const { data } = useGetReviewQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  const [postReview, { isLoading, isError, isSuccess }] =
    usePostReviewMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <textarea
          className="min-h-[30px]  border"
          onChange={handleChange}
          value={inputValue}
        />
        <button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          Submit
        </button>
      </form>
      <div className="mt-10">
        {data?.reviews?.map((review: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <span>AV</span>
            <p>{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookReview;
