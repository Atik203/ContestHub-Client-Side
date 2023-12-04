import { useContext } from "react";
import { AuthContext } from "./../../Providers/AuthProvider";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [Data, setData] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/user/${user?.email}`).then((res) => {
      setData(res.data);
    });
  }, [axiosSecure, user.email, setData]);
  const { photo, name } = Data;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-around gap-10 mt-10 lg:mt-40">
      <div className="bg-slate-100 lg:min-w-[50%] p-20 mx-auto rounded-md">
        <img src={photo} alt="" className="rounded-full w-40 md:w-60 lg:w-80" />
        <h1 className="text-xl text-center mt-4 mb-4 font-bold text-red-500">
          {name}
        </h1>
        <Link to={`/dashboard/profile-update`}>
          <div className="text-2xl flex items-center justify-center text-center font-bold cursor-pointer">
            <FaEdit></FaEdit>
          </div>
        </Link>
      </div>
      <div className=" lg:min-w-[50%] bg-slate-300 mx-auto p-10">
        <h1>CHart</h1>
      </div>
    </div>
  );
};

export default Profile;
