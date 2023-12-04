import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [Data, setData] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/user/${user?.email}`).then((res) => {
      setData(res.data);
    });
  }, [axiosSecure, user.email, setData]);
  const { photo, name } = Data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photo.value;

    const newData = { displayName, photoURL };

    axiosSecure.patch(`/updateProfile/${user?.email}`, newData).then((res) => {
      updateProfile(user, {
        displayName: displayName,
        photoURL: photoURL,
      });
      toast.success("Updated Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };

  return (
    <div className="mt-20  w-[400px] lg:w-[600px]">
      <form onSubmit={handleSubmit}>
        <div className=" w-full ">
          <label className="label">
            <span className="label-text font-medium">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={name}
            required
            className="input input-bordered w-full bg-slate-100"
          />
        </div>
        <div className="w-full ">
          <label className="label">
            <span className="label-text font-medium">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo Url"
            defaultValue={photo}
            required
            className="input input-bordered w-full bg-slate-100"
          />
        </div>
        <div className="form-control w-full max-w-5xl mx-auto mt-6 mb-6">
          <button className="btn bg-red-500 text-white hover:text-black">
            Update
          </button>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateProfile;
