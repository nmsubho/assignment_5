import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../redux/features/book/bookApi";

const BookDetails = () => {
  const { id } = useParams();

  const { data: book, isLoading, error } = useSingleBookQuery(id);
  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img
            src="https://source.unsplash.com/random/300×300/?book-cover"
            alt=""
          />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="text-xl">Author: {book?.author}</p>
          {/* <ul className="space-y-1 text-lg">
            {product?.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul> */}
          <button>Add to cart</button>
        </div>
      </div>
      <ProductReview id={id!} />
    </>
  );
};

export default BookDetails;
