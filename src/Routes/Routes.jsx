import { createBrowserRouter } from "react-router-dom";
import Root from "./../Root/Root";
import ErrorPage from "./../Components/ErrorPage/ErrorPage";
import Home from "./../Pages/Home/Home";
import Login from "./../Components/Login/Login";
import Register from "../Components/Register/Register";
import AllContests from "../Pages/AllContests/AllContests";
import Details from "../Pages/Details/Details";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../Pages/AboutUs/AboutUs";
import LeaderBoard from "../Pages/LeaderBoard/LeaderBoard";
import Dashboard from "./Dashboard";
import AllUsers from "../Pages/AllUsers/AllUsers";
import ManageContest from "../Pages/ManageContest/ManageContest";
import AddContest from "../Pages/AddContest/AddContest";
import MyCreatedContest from "../Pages/MyCreatedContest/MyCreatedContest";
import UpdateContest from "../Pages/UpdateContest/UpdateContest";

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
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/leaderboard",
        element: <LeaderBoard></LeaderBoard>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "manageUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "manageContest",
        element: <ManageContest></ManageContest>,
      },
      {
        path: "add-contest",
        element: <AddContest></AddContest>,
      },
      {
        path: "created-contest",
        element: <MyCreatedContest></MyCreatedContest>,
      },
      {
        path: "updateContest/:id",
        element: <UpdateContest></UpdateContest>,
      },
    ],
  },
]);

export default router;
