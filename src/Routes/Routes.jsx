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
import ContestRegister from "../Pages/ContestRegister/ContestRegister";
import AdminRoute from "./AdminRoute";
import CreatorRoute from "./CreatorRoute";
import Success from "../Components/Success/Success";
import ContestSubmitted from "./../Pages/ContestSubmitted/ContestSubmitted";
import Profile from "./../Pages/Profile/Profile";
import ParticipatedContest from "./../Pages/ParticipatedContest/ParticipatedContest";
import WinningContest from "./../Pages/WinningContest/WinningContest";

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
      {
        path: "/contest-register/:id",
        element: (
          <PrivateRoute>
            <ContestRegister></ContestRegister>
          </PrivateRoute>
        ),
      },
      {
        path: "/success",
        element: (
          <PrivateRoute>
            <Success></Success>
          </PrivateRoute>
        ),
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
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageContest",
        element: (
          <AdminRoute>
            <ManageContest></ManageContest>
          </AdminRoute>
        ),
      },
      {
        path: "add-contest",
        element: (
          <CreatorRoute>
            <AddContest></AddContest>
          </CreatorRoute>
        ),
      },
      {
        path: "created-contest",
        element: (
          <CreatorRoute>
            <MyCreatedContest></MyCreatedContest>
          </CreatorRoute>
        ),
      },
      {
        path: "updateContest/:id",
        element: (
          <CreatorRoute>
            {" "}
            <UpdateContest></UpdateContest>
          </CreatorRoute>
        ),
      },
      {
        path: "contest-submitted",
        element: (
          <CreatorRoute>
            <ContestSubmitted></ContestSubmitted>
          </CreatorRoute>
        ),
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "participated-contest",
        element: <ParticipatedContest></ParticipatedContest>,
      },
      {
        path: "winning-contest",
        element: <WinningContest></WinningContest>,
      },
    ],
  },
]);

export default router;
