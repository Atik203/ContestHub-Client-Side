import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ContestWinner = () => {
  const axiosSecure = useAxiosSecure();

  const [winners, setWinners] = useState([]);
  useEffect(() => {
    axiosSecure
      .get("/contestWinner")
      .then((res) => setWinners(res.data))
      .catch();
  }, [axiosSecure]);

  return (
    <div className="py-16 bg-gray-100 w-11/12 mx-auto">
      <Marquee gradient={true} pauseOnHover={true}>
        {winners.map((winner) => (
          <div
            key={winner._id}
            className="w-64 mx-4 h-80 bg-white rounded-lg p-4 shadow-md"
          >
            <img src={winner?.img} alt="" className="w-full h-1/2" />
            <div className="mb-4">
              <p className="text-lg my-1 font-semibold">{winner.name}</p>
              <div className="flex text-start items-center justify-start gap-4">
                <div>
                  <h1>{winner.winner_name}</h1>
                </div>
                <div>
                  <img
                    src={winner.winner_img}
                    className="w-12 h-12 bg-gray-300 mr-4"
                  />
                </div>
              </div>
            </div>
            <div className="prose text-justify">
              <p>
                {" "}
                Winning Prize:{" "}
                <span className="text-red-500">{winner.prize}$</span>
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ContestWinner;
