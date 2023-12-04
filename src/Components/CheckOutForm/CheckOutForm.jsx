import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOutForm = ({ contest }) => {
  const {
    _id,
    contestId,
    name,
    price,
    deadline,
    category,
    winner_name,
    prize,
  } = contest;
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price })
      .then((res) => setClientSecret(res.data?.clientSecret));
  }, [axiosSecure, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      setError(confirmError.message);
    } else {
      setError("");
      setPaymentId(paymentIntent.id);

      const payment = {
        email: user?.email,
        Name: user?.displayName,
        name,
        contestId,
        price,
        ID: _id,
        paymentId: paymentIntent.id,
        deadline,
        date: new Date(),
        category,
        winner_name,
        status: "pending",
        prize,
      };

      axiosSecure.post("/payment", payment).then((res) => {
        toast.success("Payment Successfully Done", {
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
    }
  };

  return (
    <form
      className="max-w-sm lg:max-w-md mx-auto space-y-3 bg-base-150 p-8 rounded-md h-[400px]"
      onSubmit={handleSubmit}
    >
      <div className="text-lg font-semibold mt-2 pb-5">
        <h1>Name: {user?.displayName}</h1>
        <h1>Email: {user?.email}</h1>
        <h1>Registration Price: {price}$</h1>
      </div>

      <CardElement
        options={{
          style: {
            base: {
              fontSize: "18px",
              color: "#0096FF",
              "::placeholder": {
                color: "#7393B3",
              },
            },
            invalid: {
              color: "#808080",
            },
          },
        }}
      />

      <button
        className="btn bg-red-500 text-white hover:text-black hover:bg-gray-300"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      {error && (
        <h1 className="text-red-500 mt-3 font-semibold text-base">{error}</h1>
      )}
      {!error && paymentId && (
        <h1 className="text-green-500 mt-3 font-semibold text-lg">
          Your Transaction Id: {paymentId}
        </h1>
      )}
      <ToastContainer></ToastContainer>
    </form>
  );
};

export default CheckOutForm;
