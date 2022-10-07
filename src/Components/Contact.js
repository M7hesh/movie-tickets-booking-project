import React from "react";

const Contact = (props) => {
  const { imgPath, contactName, phone, mail } = props;
  return (
    <div className="contact-card">
      <img src={imgPath} alt={contactName}></img>
      <h3>{contactName}</h3>
      <div className="info-group">
        <img src="./phone-icon.png" alt="phone icon" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src="./mail-icon.png" alt="mail icon" />
        <p>{mail}</p>
      </div>
    </div>
  );
};

export default Contact;
