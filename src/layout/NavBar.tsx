import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/features/user/userSlice";

const NavBar = () => {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setUser({ email: null, uid: null }));
    });
  };
  return (
    <nav
      id="header"
      className="w-full z-30 py-1 bg-white shadow-lg border-b border-blue-400 fixed"
    >
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <svg
            className="fill-current text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
              <li>
                <Link
                  className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                  to="/books"
                >
                  Books
                </Link>
              </li>
              {user.uid && (
                <>
                  <li>
                    <Link
                      className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                      to="/my-list"
                    >
                      My List
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                      to="/add-new-book"
                    >
                      Add New Book
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>

        <div
          className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
          id="nav-content"
        >
          {user.uid ? (
            <div className="auth flex items-center w-full md:w-full">
              <button
                className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700"
                onClick={handleLogout}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="auth flex items-center w-full md:w-full">
              <Link to={"/sign-in"}>
                <button className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">
                  Sign In
                </button>
              </Link>

              <Link to={"/sign-up"}>
                <button className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
