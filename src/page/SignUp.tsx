import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { createUser } from "../redux/features/user/userSlice";

const SignUp = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = event.target;
    dispatch(createUser({ email: email.value, password: password.value }));
  };
  return (
    <div className="px-10 py-5 xs:p-0 mx-auto md:w-full md:max-w-md">
      <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
        <form className="px-5 py-7" onSubmit={onSubmit}>
          <label className="font-semibold text-sm text-gray-600 pb-1 block">
            E-mail
          </label>
          <input
            name="email"
            type="email"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
          <label className="font-semibold text-sm text-gray-600 pb-1 block">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
          <button
            type="submit"
            className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
          >
            <span className="inline-block mr-2">Sign Up</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </form>
        <div className="py-5 font-normal text-sm text-center">
          Already have an account?{" "}
          <span>
            <Link to="/sign-in">Sign In</Link>
          </span>
        </div>
      </div>
      <div className="py-5 text-center">
        <div className="text-center whitespace-nowrap">
          <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 inline-block align-text-top"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <Link to={"/"}>
              <span className="inline-block ml-1">Back to Home</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
