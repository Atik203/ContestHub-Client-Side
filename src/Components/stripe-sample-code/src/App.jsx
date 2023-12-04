import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useContext } from "react";
import CheckoutForm from "./CheckoutForm";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

export default function App({ price }) {
  const [clientSecret, setClientSecret] = useState("");

  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price })
      .then((res) => setClientSecret(res.data?.clientSecret));
  }, [axiosSecure, price]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="mx-auto md:w-[600px]">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
