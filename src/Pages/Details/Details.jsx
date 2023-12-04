import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Countdown from "react-countdown";

const Details = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [contest, setContest] = useState([]);
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    axiosSecure.get(`/details/${id}`).then((data) => setContest(data.data));
  }, [id, axiosSecure]);

  useEffect(() => {
    async () => {
      await axiosSecure
        .get(`/registered/${contest?.contestId}`)
        .then((res) => setRegistered(res.data));
    };
  }, [axiosSecure, contest.contestId]);

  const {
    _id,
    img,
    name,
    category,
    deadline,
    description,
    winner_name,
    winner_img,
    participant,
    instruction,
    prize,
    price,
  } = contest;

  const deadlineDate = new Date(deadline);
  const now = new Date();
  const isDeadlineOver = deadlineDate < now;

  return (
    <div className="w-10/12 mx-auto mt-20 mb-20">
      <Helmet>
        <title>Food Details</title>
      </Helmet>
      <img src={img} className="md:h-[400px] lg:h-[800px] w-full" alt="" />
      <div className="p-4">
        <h1 className="text-red-500 font-bold text-2xl my-3">
          <span className="text-black">Contest Name:</span> {name}
        </h1>
        <h1 className="text-lg font-medium">Category: {category}</h1>
        <h1 className="text-lg font-medium">Participant: {participant}</h1>
        <h1 className="text-lg font-medium">Details:</h1>
        <p className="text-base text-justify">
          {description} {instruction}
        </p>
        <p className="text-base mt-2 text-justify">
          Winning Prize Money:
          <span className="text-red-500 font-medium"> {prize}$</span>
        </p>
        <p className="text-base my-1 font-semibold">
          Registration Price: {price}$
        </p>
        {!isDeadlineOver && (
          <h1 className="text-lg font-bold my-2">
            Time Remaining: <Countdown date={deadlineDate} daysInHours />
          </h1>
        )}

        {isDeadlineOver && (
          <div className="text-center mt-4">
            <h1 className="text-xl text-red-400 font-medium my-2">
              Contest Deadline is Over
            </h1>
            <h1 className="text-lg font-bold mt-2">
              Winner Name: <span className="text-red-500">{winner_name}</span>
            </h1>
            <img src={winner_img} alt="Winner" className="w-24 h-24 mx-auto" />
          </div>
        )}
      </div>
      {registered.registered === "false" ? (
        <div>
          {" "}
          {!isDeadlineOver && (
            <div className="ml-4">
              <Link to={`/contest-register/${_id}`}>
                <button className="btn text-white border-none bg-red-500 hover:text-black hover:bg-gray-300">
                  Register Now
                </button>
              </Link>
            </div>
          )}{" "}
        </div>
      ) : (
        <h1 className="text-red-500 ml-3 font-bold">You Already Registered</h1>
      )}
    </div>
  );
};

export default Details;
