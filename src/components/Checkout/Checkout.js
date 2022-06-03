import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";

import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import './Checkout.css'

const stripePromise = loadStripe(
  "pk_test_51L0km2DvpcSfFbldZpHNo418SREG3o5oy78wO7zoMHeX1eRDylYWETYGUtNm5XT3MYj7IpDyWpOK2d8IsTvrGuL300xWizEDN8"
);

const Checkout = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  console.log(service);

  const { img, name, price } = service;
  const { displayName, email } = user;
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
      <div className="text-black">
        <Card className="w-50">
          <div className="">
            <Card.Img className="the-card-img w-full" variant="top" src={img} />
          </div>
          <Card.Body>
            <Card.Text>
              <p>
                Dear {displayName}, Please pay for your selected package{" "}
                <span className="text-success">{name}</span>.
              </p>
              Your Package price is{" "}
              <span className="text-success fw-bold">${price}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="w-75 wounded payment-card">
        <Elements stripe={stripePromise}>
          <CheckoutForm service={service}></CheckoutForm>
        </Elements>
      </div>
      </div>
    </div>
  );
};

export default Checkout;
