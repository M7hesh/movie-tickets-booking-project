import React from "react";
import { useNavigate } from "react-router-dom";

const MovieList = (props) => {
  const { imgPath, movieName, genre, cast, cost } = props;
  const navigate = useNavigate();
  const handleBooking = () => {
    navigate("/booking", { state: { imgPath, movieName, genre, cast, cost } });
  };

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
      <button id="bookBtn" onClick={handleBooking}>
        <strong>Book</strong>
      </button>
    </div>
  );
};

export default MovieList;
