import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MovieList = (props) => {
  const { imgPath, movieName, genre, cast, cost, index } = props;
  const navigate = useNavigate();
  const handleBooking = () => {
    navigate("/booking", { state: { imgPath, movieName, genre, cast, cost } });
  };
  // add keys later
  return (
    <div className="movie-card">
      <img src={imgPath} alt={movieName}></img>
      <h3>{movieName}</h3>
      <div className="info-group">
        <p>{genre}</p>
      </div>
      <div className="info-group">
        <p>{cast}</p>
      </div>
      {/* <Link to={"/booking"} state={{ imgPath, movieName, genre, cast }}>
        <button id="bookBtn">
          <strong>Book</strong>
        </button>
      </Link> */}
      <button id="bookBtn" onClick={handleBooking}>
        <strong>Book</strong>
      </button>
    </div>
  );
};

export default MovieList;
