import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Form() {
  const [formData, setFormData] = React.useState({
    email: "",
    name: "",
    phone: "",
    creditCard: "",
    cvv: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isCreditCardValid, setIsCreditCardValid] = useState(false);
  const [isCvvValid, setIsCvvValid] = useState(false);

  const navigate = useNavigate();
  const Location = useLocation();
  const data = Location.state;
  console.log(data);

  //   {
  //     "imgPath": "./brahmastra.jpg",
  //     "movieName": "Brahmãstra Part 1: Shiva",
  //     "genre": "Action, Adventure, Fantasy",
  //     "cast": "Ranbir Kapoor, Alia Bhatt",
  //     "seatCount": 2,
  //     "seatsBooked": [
  //         "A3",
  //         "C3"
  //     ]
  // }

  const { email, name, phone, creditCard, cvv } = formData;
  let seatsBookedString = "";
  // data.seatsBooked.forEach((seat) => {
  // console.log("aaaaa", seat);
  seatsBookedString = data.seatsBooked.toString();
  // });
  console.log("aaaaa", seatsBookedString);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, type, value, checked, placeholder } = event.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: type === "checkbox" ? checked : value };
    });
    if (email && name && phone && creditCard && cvv) {
      document.getElementById("proceedError").innerHTML = "";
    }

    // validations
    if (value === "" || value === null) {
      document.getElementById(
        `${name}Error`
      ).innerHTML = `${placeholder} is a required field`;
    } else {
      document.getElementById(`${name}Error`).innerHTML = "";
    }
  };

  const handleEmailValidation = (e) => {
    e.preventDefault();
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!e.target.value.match(mailformat) && e.target.value) {
      document.getElementById(`emailError`).innerHTML = `Invalid Email Id!`;
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
  };

  const handleVisaCreditCardValidation = (e) => {
    e.preventDefault();
    // Visa card starts with 4, length 13 or 16 digits
    const cardNoRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if (!e.target.value.match(cardNoRegex) && e.target.value) {
      document.getElementById(
        `creditCardError`
      ).innerHTML = `Invalid Visa credit card number!`;
      setIsCreditCardValid(false);
    } else {
      setIsCreditCardValid(true);
    }
  };

  const handlePhoneNumberValidation = (e) => {
    e.preventDefault();
    const phoneNoRegex = /^\d{10}$/;
    if (!e.target.value.match(phoneNoRegex) && e.target.value) {
      document.getElementById(`phoneError`).innerHTML = `Invalid Phone number!`;
      setIsPhoneValid(false);
    } else {
      setIsPhoneValid(true);
    }
  };

  const handleCvvValidation = (e) => {
    e.preventDefault();
    // [0-9] represents the digit between 0-9.
    // {3, 4} represents the string has 3 or 4 digits.
    const cvvRegex = /^[0-9]{3,4}$/;
    if (!e.target.value.match(cvvRegex) && e.target.value) {
      document.getElementById(`cvvError`).innerHTML = `Invalid CVV!`;
      setIsCvvValid(false);
    } else {
      setIsCvvValid(true);
    }
  };

  const handlePaymentProceed = (e) => {
    e.preventDefault();
    if (!(email && name && phone && creditCard && cvv)) {
      document.getElementById("proceedError").innerHTML =
        "Please fill all the fields!";
    } else if (
      !(isCreditCardValid && isEmailValid && isPhoneValid && isCvvValid)
    ) {
      document.getElementById("proceedError").innerHTML =
        "Please fill all the fields correctly!";
    } else {
      navigate("/paymentSuccessful", { state: { ...data, ...formData } });
    }
  };

  return (
    <main>
      <div className="seatDetails">
        <h2>{data.movieName}</h2>
        <h3>
          Seats selected: {data.seatCount} ({seatsBookedString})
        </h3>
      </div>
      <form>
        <label>
          <strong>Customer Details</strong>
        </label>

        <div className="formField">
          <label>Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
          <span>*</span>
          <p id="nameError"></p>
        </div>

        <div className="formField">
          <label>Contact:</label>
          <input
            name="phone"
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={handleChange}
            onBlur={handlePhoneNumberValidation}
            onPointerLeave={handlePhoneNumberValidation}
          />
          <span>*</span>
          <p id="phoneError"></p>
        </div>

        <div className="formField">
          <label>Email:</label>
          <input
            name="email"
            type="text"
            placeholder="Email address"
            value={email}
            onChange={handleChange}
            onBlur={handleEmailValidation}
            onPointerLeave={handleEmailValidation}
          />
          <span>*</span>
          <p id="emailError"></p>
        </div>

        <label>
          <strong>Payment Details</strong>
        </label>

        <div className="formField">
          <label>Amount:</label>
          <input
            name="cost"
            type="text"
            value={`Rs. ${data.cost * data.seatCount}.00`}
            disabled
            style={{ color: "red", marginRight: "6%" }}
          />
        </div>

        <div className="formField">
          <label>Credit Card:</label>
          <input
            name="creditCard"
            type="text"
            placeholder="Credit card number"
            value={creditCard}
            onChange={handleChange}
            onBlur={handleVisaCreditCardValidation}
            onPointerLeave={handleVisaCreditCardValidation}
            style={{ marginLeft: "-5%" }}
          />
          <span>*</span>
          <p id="creditCardError"></p>
        </div>

        <div className="formField">
          <label>CVV:</label>
          <input
            name="cvv"
            type="password"
            placeholder="CVV"
            value={cvv}
            onChange={handleChange}
            onBlur={handleCvvValidation}
            onPointerLeave={handleCvvValidation}
            minLength={3}
            maxLength={3}
          />
          <span>*</span>
          <p id="cvvError"></p>
        </div>

        <p id="proceedError"></p>

        <div className="formButtons">
          {/* <Link to={"/booking"} state={{ data }}>
            <button id="btn1">Back</button>
          </Link> */}
          <button
            id="btn1"
            type="button"
            onClick={() => navigate("/booking", { state: { ...data } })}
          >
            Back
          </button>

          <button id="btn2" type="button" onClick={handlePaymentProceed}>
            Proceed
          </button>
        </div>
      </form>
    </main>
  );
}
