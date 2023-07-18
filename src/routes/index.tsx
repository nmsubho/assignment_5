import { createBrowserRouter } from "react-router-dom";
import SignUp from "../page/SignUp";
import App from "../App";
import SignIn from "../page/SignIn";
import NotFound from "../page/NotFound";
import Books from "../page/Books";
import Home from "../page/Home";
import AddNewBook from "../page/AddNewBook";
import BookDetails from "../page/BookDetails";
import EditBook from "../page/EditBook";
import Protected from "../components/Protected";
import MyList from "../page/MyList";

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
        path: "/my-list",
        element: (
          <Protected>
            <MyList />
          </Protected>
        ),
      },
      {
        path: "/add-new-book",
        element: (
          <Protected>
            <AddNewBook />
          </Protected>
        ),
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
      },
      {
        path: "/edit-book/:id",
        element: (
          <Protected>
            <EditBook />
          </Protected>
        ),
      },
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
