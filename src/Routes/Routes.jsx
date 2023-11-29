import { createBrowserRouter } from "react-router-dom";
import Root from "./../Root/Root";
import ErrorPage from "./../Components/ErrorPage/ErrorPage";
import Home from "./../Pages/Home/Home";
import Login from "./../Components/Login/Login";
import Register from "../Components/Register/Register";
import AllContests from "../Pages/AllContests/AllContests";
import Details from "../Pages/Details/Details";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-contest/:category",
        element: <AllContests></AllContests>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
