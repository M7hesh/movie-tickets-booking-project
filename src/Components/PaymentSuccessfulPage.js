import React from "react";
import { Link, useLocation } from "react-router-dom";

const PaymentSuccessfulPage = () => {
  const Location = useLocation();
  const data = Location.state;

  return (
    <div className="paymentSuccess">
      <h2>Payment Successful!</h2>
      <img
        className="paymentSuccessLogo"
        src="./book_tickets_logo.png"
        alt="logo"
      ></img>

      <h3>Booking Summary:</h3>
      <p>
        Name: <strong>{data.name}</strong>
        <br></br>
        Movie: <strong>{data.movieName}</strong>
        <br></br>
        Seats booked: <strong>{data.seatCount}</strong>
        <br></br>
        Seats: <strong>{data.seatsBooked.toString()}</strong>
        <br></br>
        Amount paid: <strong>Rs. {data.cost * data.seatCount}.00</strong>
      </p>
      <div id="paymentSuccessBtn">
        <Link to={"/"}>
          <button id="paymentSuccessBtnId">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessfulPage;
