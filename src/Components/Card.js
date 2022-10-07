import React from "react";

const Card = () => {
  return (
    <div className="card">
      <img
        src="./katie-zaferes.png"
        alt="katie-zaferes"
        className="card--image"
      />
      <div className="card--stats">
        <img src="./star.png" alt="" className="card--star" />
        <span className="gray">5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        From <strong>$135</strong> / person
      </p>
    </div>
  );
};

export default Card;
