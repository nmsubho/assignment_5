import { useNavigate, useParams } from "react-router-dom";
import {
  useSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/book/bookApi";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: book, isLoading, error } = useSingleBookQuery(id);

  const [updateBook] = useUpdateBookMutation();

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const { title, author, genre, publicationDate } = event.target;

    const options = {
      id: id,
      data: {
        title: title.value,
        author: author.value,
        genre: genre.value,
        publicationDate: publicationDate.value,
      },
    };

    const result = await updateBook(options);
    if (result?.data?.ok) {
      navigate(`/books/${id}`);
    }
  };

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <form onSubmit={onSubmit}>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
          <h1 className="text-center text-lg font-bold text-gray-500">
            Update Book
          </h1>
          <div className="space-y-4 mt-6">
            <div className="w-full">
              <input
                required
                type="text"
                placeholder="Title"
                defaultValue={book?.title}
                name="title"
                className="px-4 py-2 bg-gray-50"
              />
            </div>
            <div className="w-full">
              <input
                required
                type="text"
                placeholder="Author"
                defaultValue={book?.author}
                name="author"
                className="px-4 py-2 bg-gray-50"
              />
            </div>
            <div className="w-full">
              <input
                required
                type="text"
                placeholder="Genre"
                defaultValue={book?.genre}
                name="genre"
                className="px-4 py-2 bg-gray-50"
              />
            </div>
            <div className="w-full">
              <input
                required
                type="date"
                placeholder="Publication Date"
                defaultValue={book?.publicationDate}
                name="publicationDate"
                className="px-4 py-2 bg-gray-50 w-full"
              />
            </div>
          </div>
          <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">
            Update
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditBook;
