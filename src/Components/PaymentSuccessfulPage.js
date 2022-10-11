import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccessfulPage = () => {
  return (
    <div className="paymentSuccess">
      <h2>Payment Successful</h2>
      <h3>Tickets booked..!</h3>
      <div id="paymentSuccessBtn">
        <Link to={"/"}>
          <button id="paymentSuccessBtnId">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessfulPage;
