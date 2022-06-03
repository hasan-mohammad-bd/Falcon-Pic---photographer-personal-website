import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";

import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

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

  const {img, name, price} = service;
  const {displayName, email} = user;
  return (
    <div>
      <div className="container text-black">
        <Card className="w-25">
          <div className="">
          <Card.Img className="the-card-img w-full" variant="top" src={img} />
          </div>
          <Card.Body>
            <Card.Text>
              <p>Dear {displayName}, Please pay for your selected package <span className="text-success">{name}</span>.</p>
              Your Package price is <span className="text-success fw-bold">${price}</span>
            </Card.Text>
          </Card.Body>

        </Card>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Checkout;
