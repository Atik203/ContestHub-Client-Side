import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import CheckOutForm from "../../Components/CheckOutForm/CheckOutForm";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const ContestRegister = () => {
  const { id } = useParams();

  const [contest, setContest] = useState([]);

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/details/${id}`).then((res) => setContest(res.data));
  }, [axiosSecure, id]);
  if (!contest || isNaN(contest.price)) {
    return (
      <div className="w-11/12 mx-auto my-40 text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="w-11/12 mx-auto my-20 min-h-[60vh]">
      <Helmet>
        <title>Contest Register</title>
      </Helmet>
      <Elements stripe={stripePromise}>
        <CheckOutForm contest={contest}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default ContestRegister;
