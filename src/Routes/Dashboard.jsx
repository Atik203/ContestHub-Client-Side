import { NavLink, Outlet } from "react-router-dom";

import { FaHome, FaBook, FaUsers, FaTrophy } from "react-icons/fa";
import { FaImagePortrait, FaPeopleGroup } from "react-icons/fa6";
import useAdmin from "../Hooks/useAdmin";
import { Helmet } from "react-helmet";

const DrawerLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-black" : "text-white"
    }
  >
    {children}
  </NavLink>
);

const Dashboard = () => {
  // TODO: get isAdmin value from database
  const [isAdmin] = useAdmin();

  const userlinks = (
    <>
      <li>
        <DrawerLink to="/dashboard/profile">
          <FaImagePortrait></FaImagePortrait> Profile
        </DrawerLink>
      </li>
      <li>
        <DrawerLink to="/dashboard/participated-contest">
          <FaPeopleGroup></FaPeopleGroup> Participated Contest
        </DrawerLink>
      </li>
      <li>
        <DrawerLink to="/dashboard/winning-contest">
          <FaTrophy /> Winning Contest
        </DrawerLink>
      </li>
    </>
  );
  const adminlinks = (
    <>
      <li>
        <DrawerLink to="/dashboard/manageUsers">
          <FaUsers />
          Manage users
        </DrawerLink>
      </li>
      <li>
        <DrawerLink to="/dashboard/manageContest">
          <FaBook></FaBook> Manage Contest
        </DrawerLink>
      </li>
    </>
  );

  const creatorLinks = (
    <>
      <li>
        <DrawerLink to="/dashboard/add-contest">
          <FaUsers />
          Add Contest
        </DrawerLink>
      </li>
      <li>
        <DrawerLink to="/dashboard/created-contest">
          <FaBook></FaBook> My Created Contest
        </DrawerLink>
      </li>
      <li>
        <DrawerLink to="/dashboard/contest-submitted">
          <FaBook></FaBook> Contest Submitted
        </DrawerLink>
      </li>
    </>
  );

  const menuLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black" : "text-white"
          }
        >
          <FaHome></FaHome>Go HOME
        </NavLink>
      </li>
    </>
  );
  let links = <></>;

  if (isAdmin === "admin") {
    links = adminlinks;
  } else if (isAdmin === "creator") {
    links = creatorLinks;
  } else {
    links = userlinks;
  }
  return (
    <div>
      <div className="drawer  lg:drawer-open">
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center mt-4">
          <label
            htmlFor="my-drawer-2"
            className="btn border-none text-sm bg-red-400 mt-5 drawer-button lg:hidden"
          >
            Open Menu
          </label>
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 bg-red-500 uppercase text-white font-bold text-lg min-h-full">
            {/* Sidebar content here */}
            {links}
            <div className="divider divider-neutral"></div>
            {menuLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
