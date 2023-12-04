import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

export default function CheckoutForm() {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [paymentId, setPaymentId] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (paymentIntent.status === "succeeded") {
        setPaymentId(paymentIntent);
      }
      switch (paymentIntent.status) {
        case "succeeded": {
          toast.success("Payment Done Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setMessage("Payment succeeded!");
          break;
        }
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
      // if (paymentIntent.status === "succeeded") {
      //   toast.success("Payment Done Successfully", {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //   });
      // }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,

      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:5173/success",
      },
    });

    // const {error } = await stripe.confirmCardPayment(
    //   clientSecret,{
    //      payment_method: {
    //       card: elements,
    //      }
    //   }
    // )

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
    defaultValues: {
      billingDetails: {
        email: user?.email,
        name: user?.displayName,
      },
    },
  };

  return (
    <form
      className="mx-auto w-[380px] -ml-20 md:-ml-16 lg:mr-0 md:w-[500px] lg:w-[600px] border-2 p-8 min-w-md space-y-2"
      onSubmit={handleSubmit}
    >
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button
        className="btn bg-blue-500 text-white text-center w-full mt-2"
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">
          {isLoading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
      <ToastContainer></ToastContainer>
    </form>
  );
}
