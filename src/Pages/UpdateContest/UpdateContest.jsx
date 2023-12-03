import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const UpdateContest = () => {
  const { id } = useParams();

  const category = [
    { name: "Gaming" },
    { name: "Business" },
    { name: "Medical" },
    { name: "Article Writing" },
  ];

  const [contest, setContest] = useState([]);
  const [contestData, setContestData] = useState([]);

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selected, setSelected] = useState(category[0]);
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axiosSecure
      .get(`/singleContest/${id}`)
      .then((data) => setContest(data.data));
  }, [id, axiosSecure]);

  const contestId = contest?.contestId;

  useEffect(() => {
    if (contestId) {
      axiosSecure
        .get(`/contestData?contestId=${contestId}`)
        .then((res) => setContestData(res.data));
    }
  }, [axiosSecure, contestId, setContestData]);

  useEffect(() => {
    setValue("name", contestData.name || "");
    setValue("prize", contestData.prize || "");
    setValue("img", contestData.img || "");
    setValue("instruction", contestData.instruction || "");
    setValue("deadline", contestData.deadline || "");
    setValue("description", contestData.description || "");
  }, [contestData, setValue]);

  const onSubmit = (data) => {
    const { name, img, prize, deadline, instruction, description } = data;
    const participant = 0;
    const winner_name = null;
    const winner_img = null;
    const category = selected.name;
    const email = user?.email;
    const ContestData = {
      name,
      img,
      prize,
      category,
      participant,
      winner_name,
      winner_img,
      description,
      deadline,
      instruction,
    };

    const CreatorData = {
      name,
      img,
      email,
      prize,
      category,
      participant,
      winner_name,
      winner_img,
      description,
      deadline,
      instruction,
    };
    axiosSecure
      .patch(`/updateContest/${contestData._id}`, ContestData)
      .then((res) => {
        console.log(res.data);
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

    axiosSecure
      .patch(`/updateCreatorContest/${contest._id}`, CreatorData)
      .then((res) => {
        console.log(res.data);
      });
  };
  console.log(contest);
  console.log(contestData);
  return (
    <div className="w-11/12 mx-auto mb-20">
      <Helmet>
        <title>Update Contest</title>
      </Helmet>
      <h1 className="mt-10 text-2xl font-bold text-center mb-8">
        Update Contest
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-300 p-4 rounded-md"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between mt-2">
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Contest Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...register("name")}
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Prize Money</span>
            </label>
            <input
              type="text"
              name="prize"
              placeholder="Prize"
              {...register("prize")}
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Contest Photo</span>
            </label>
            <input
              type="text"
              name="img"
              placeholder="Photo Url"
              {...register("img")}
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Instructions</span>
            </label>
            <input
              type="text"
              name="instructions"
              placeholder="Instructions"
              {...register("instruction")}
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="form-control my-2 w-full max-w-sm">
            <label className="w-full max-w-sm my-1 font-medium text-sm">
              Select Type
            </label>
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {category.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text font-medium">Select Date</span>
            </label>
            <input
              type="date"
              name="deadline"
              placeholder="Date"
              {...register("deadline")}
              className="input input-bordered w-full max-w-sm"
            />
          </div>
        </div>{" "}
        <div className="form-control w-full max-w-5xl mx-auto">
          <label className="label">
            <span className="label-text font-medium">Contest Description</span>
          </label>
          <textarea
            name="description"
            placeholder="description"
            {...register("description")}
            className="textarea textarea-bordered w-full max-w-5xl h-32"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-5xl mx-auto mt-6 mb-6">
          <button className="btn bg-red-500 text-white hover:text-black">
            Update Contest
          </button>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateContest;
