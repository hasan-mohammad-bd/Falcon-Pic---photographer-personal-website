import React from "react";
import "./Checkout.css";
const Checkout = () => {
  return (
    <div className="container d-flex flex-column flex-lg-row">
      <div className="photo-container"></div>
      <div className="checkout-form w-100">
        <form className="p-3 " action="">
          <div className="dropdown d-block w-75 mx-auto p-2 mb-3">
            <label className=" mx-auto p-2 mb-3" for="Package">
              Choose my package:
            </label>
            <select
              id="Package"
              className="w-50 mx-auto p-2 mb-3 selected"
              name="Package"
            >
              <option value="volvo">Fashion Shotting</option>
              <option value="saab">Interior Shotting</option>
              <option value="fiat" selected>
                Product Shotting
              </option>
            </select>
          </div>
          <h3 className="text-center">Your Details</h3>
          <input
            className="d-block w-75 mx-auto p-2 mb-3"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <input
            className="d-block w-75 mx-auto p-2 mb-3"
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            required
          />
          <input
            className="d-block w-75 mx-auto p-2 mb-3"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <h3 className="text-center">Payment</h3>
          <input
            className="d-block w-75 mx-auto p-2 mb-3"
            type="text"
            name="name"
            id="name"
            placeholder="Name On Card"
            required
          />
          <input
            className="d-block w-75 mx-auto p-2 mb-3"
            type="text"
            name="name"
            id="name"
            placeholder="Card Number"
            required
          />
          <input
            className="d-block w-75 mx-auto p-2 mb-3"
            type="text"
            name="name"
            id="name"
            placeholder="Exp Months"
            required
          />
          <input
            className="d-block w-75 mx-auto p-2 mb-3"
            type="text"
            name="name"
            id="name"
            placeholder="CVV"
            required
          />
          <input
            className="d-block w-75 mx-auto p-2 mb-3"
            type="text"
            name="name"
            id="name"
            placeholder="Exp Year"
            required
          />
          <input
            className="btn1 d-block w-75 mx-auto"
            type="submit"
            value="Check Out"
          />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
