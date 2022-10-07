import React from "react";

const MovieList = (props) => {
  const { imgPath, movieName, genre, cast } = props;
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
    </div>
  );
};

export default MovieList;
