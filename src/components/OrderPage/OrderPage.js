import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SingleOrder from "./SingleOrder";

const OrderPage = () => {
    const [user] = useAuthState(auth)
  const [orders, setOrders] = useState([]);
  console.log(orders);
  useEffect(() => {
    fetch(`https://photography-q03e.onrender.com/payment/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className='container mt-5'>
        <h2 className="my-3 text-center">Your Order Details</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Your Email</th>
            <th>Package Name</th>
            <th>Price</th>
            <th>Transaction Id</th>
          </tr>
        </thead>
        <tbody>
            {
                orders.map((order, index) => <SingleOrder index={index} order={order} key={order._id}></SingleOrder>)
            }
        </tbody>
      </Table>
    </div>
  );
};

export default OrderPage;
