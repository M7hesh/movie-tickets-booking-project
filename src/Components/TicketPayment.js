import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    email: "",
    name: "",
    city: "",
    phone: "",
    creditCard: "",
    cvv: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, type, value, checked } = event.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: type === "checkbox" ? checked : value };
    });
    console.log(formData);
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
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="city"
          type="text"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          name="phone"
          type="text"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          name="email"
          type="text"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
        />
        <label>
          <strong>Payment Details</strong>
        </label>
        <input
          name="creditCard"
          type="text"
          placeholder="Credit card number"
          value={formData.creditCard}
          onChange={handleChange}
        />
        <input
          name="cvv"
          type="password"
          placeholder="CVV"
          value={formData.cvv}
          onChange={handleChange}
        />
        <div className="formButtons">
          <button id="btn1" onClick={handleProceed}>
            Proceed
          </button>
          <button id="btn2">Back</button>
        </div>
      </form>
    </main>
  );
}
