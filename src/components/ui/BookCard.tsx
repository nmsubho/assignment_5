import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link to={`/books/${book._id}`}>
      <div className="lg:flex">
        <img
          className="object-cover w-full h-56 rounded-lg lg:w-64"
          src="https://source.unsplash.com/random/300×300/?book-cover"
          alt=""
        />

        <div className="flex flex-col justify-between py-6 lg:mx-6">
          <a href="#" className="text-xl font-semibold hover:underline  ">
            {book.title}
          </a>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>

          <span className="text-sm text-gray-500 dark:text-gray-300">
            Published On: {book.publicationDate}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
