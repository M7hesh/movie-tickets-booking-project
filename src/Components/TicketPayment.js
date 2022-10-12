import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Form() {
  const [formData, setFormData] = React.useState({
    email: "",
    name: "",
    phone: "",
    creditCard: "",
    cvv: "",
  });
  const [proceed, setProceed] = useState(false);
  const navigate = useNavigate();
  const Location = useLocation();
  const data = Location.state;
  console.log(data);

  const { email, name, phone, creditCard, cvv } = formData;

  // if (email && name && phone && creditCard && cvv) {
  //   setProceed(true);
  // }

  // email && name && phone && creditCard && cvv && setProceed(true);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, type, value, checked, placeholder } = event.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: type === "checkbox" ? checked : value };
    });

    // validations
    if (value === "" || value === null) {
      document.getElementById(
        `${name}Error`
      ).innerHTML = `${placeholder} is a required field`;
      setProceed(false);
    } else {
      document.getElementById(`${name}Error`).innerHTML = "";
    }
  };

  const handleEmailValidation = (e) => {
    e.preventDefault();
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!e.target.value.match(mailformat) && e.target.value) {
      document.getElementById(`emailError`).innerHTML = `Invalid Email Id!`;
      setProceed(false);
    }
  };

  const handleVisaCreditCardValidation = (e) => {
    e.preventDefault();
    // Visa card starts with 4, length 13 or 16 digits
    const cardNo = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if (!e.target.value.match(cardNo) && e.target.value) {
      document.getElementById(
        `creditCardError`
      ).innerHTML = `Not a valid Visa credit card number!`;
      setProceed(false);
    }
  };

  const handlePhoneNumberValidation = (e) => {
    e.preventDefault();
    var phoneNo = /^\d{10}$/;
    if (!e.target.value.match(phoneNo) && e.target.value) {
      document.getElementById(
        `phoneError`
      ).innerHTML = `Not a valid Phone number!`;
      setProceed(false);
    }
  };

  const handleProceed = (event) => {
    event.preventDefault();
    // if (formData.password === formData.confirmPassword) {
    //   console.log("Successfully signed up");
    //   if (formData.isNewsletter) {
    //     console.log("Thanks for signing up for our newsletter");
    //   }
    // } else {
    //   console.log("Passwords do not match");
    // }
  };

  return (
    <main>
      <form>
        <label>
          <strong>Customer Details</strong>
        </label>

        <div>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
          <span>*</span>
          <p id="nameError" style={{ display: "block" }}></p>
        </div>

        <div>
          <input
            name="phone"
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={handleChange}
            onBlur={handlePhoneNumberValidation}
          />
          <span>*</span>
          <p id="phoneError" style={{ display: "block" }}></p>
        </div>

        <div>
          <input
            name="email"
            type="text"
            placeholder="Email address"
            value={email}
            onChange={handleChange}
            onBlur={handleEmailValidation}
          />
          <span>*</span>
          <p id="emailError" style={{ display: "block" }}></p>
        </div>

        <label>
          <strong>Payment Details</strong>
        </label>

        <div>
          <input
            name="creditCard"
            type="text"
            placeholder="Credit card number"
            value={creditCard}
            onChange={handleChange}
            onBlur={handleVisaCreditCardValidation}
          />
          <span>*</span>
          <p id="creditCardError" style={{ display: "block" }}></p>
        </div>

        <div>
          <input
            name="cvv"
            type="password"
            placeholder="CVV"
            value={cvv}
            onChange={handleChange}
            minLength={3}
            maxLength={3}
          />
          <span>*</span>
          <p id="cvvError" style={{ display: "block" }}></p>
        </div>

        <div className="formButtons">
          {/* <button id="btn1" onClick={handleProceed}>
            Proceed
          </button>
          <button id="btn2">Back</button> */}
          {/* <Link to={"/booking"} state={{ data }}>
            <button id="btn1">Back</button>
          </Link> */}
          <button
            id="btn1"
            onClick={() => navigate("/booking", { state: { ...data } })}
          >
            Back
          </button>
          <Link to={"/paymentSuccessful"}>
            <button id="btn2" disabled={!proceed}>
              Proceed
            </button>
          </Link>
        </div>
      </form>
    </main>
  );
}
