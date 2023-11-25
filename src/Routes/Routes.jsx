import { createBrowserRouter } from "react-router-dom";
import Root from "./../Root/Root";
import ErrorPage from "./../Components/ErrorPage/ErrorPage";
import Home from "./../Pages/Home/Home";
import Login from "./../Components/Login/Login";
import Register from "../Components/Register/Register";

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
    ],
  },
]);

export default router;
