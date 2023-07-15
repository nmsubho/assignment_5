import { createBrowserRouter } from "react-router-dom";
import SignUp from "../page/SignUp";
import App from "../App";
import SignIn from "../page/SignIn";
import NotFound from "../page/NotFound";
import Books from "../page/Books";
import Home from "../page/Home";
import AddNewBook from "../page/AddNewBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/add-new-book",
        element: <AddNewBook />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      // {
      //   path: "/books/:id",
      //   element: <BookDetails />,
      // },
    ],
  },
  // {
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  // {
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
