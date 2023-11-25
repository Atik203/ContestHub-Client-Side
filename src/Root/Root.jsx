import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "./../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="bg-base-100 flex min-h-screen flex-col">
      <div className="flex-grow">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
