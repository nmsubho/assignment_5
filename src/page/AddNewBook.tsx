import { useAddBookMutation } from "../redux/features/book/bookApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const AddNewBook = () => {
  // const dispatch = useAppDispatch();

  // const onSubmit = (event: any) => {
  //   event.preventDefault();
  //   const { email, password } = event.target;
  //   dispatch(({ email: email.value, password: password.value }));
  // };

  const { user } = useAppSelector((state) => state.user);

  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();

  const onSubmit = (event: any) => {
    event.preventDefault();
    const { title, author, genre, publicationDate } = event.target;
    addBook({
      title: title.value,
      author: author.value,
      genre: genre.value,
      publicationDate: publicationDate.value,
      addedBy: user.uid,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
            <h1 className="text-center text-lg font-bold text-gray-500">
              Add Book
            </h1>
            <div className="space-y-4 mt-6">
              <div className="w-full">
                <input
                  required
                  type="text"
                  placeholder="Title"
                  name="title"
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
              <div className="w-full">
                <input
                  required
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
              <div className="w-full">
                <input
                  required
                  type="text"
                  placeholder="Genre"
                  name="genre"
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
              <div className="w-full">
                <input
                  required
                  type="date"
                  placeholder="Publication Date"
                  name="publicationDate"
                  className="px-4 py-2 bg-gray-50 w-full"
                />
              </div>
            </div>
            <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewBook;
