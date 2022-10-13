import React from "react";

import MOVIES_DATA from "../MoviesData";
import MovieList from "./MovieList";

const HomePage = () => {
  return (
    <div className="movies">
      {MOVIES_DATA.map((movie, index) => {
        const { imgPath, movieName, genre, cast, cost } = movie;
        return (
          <MovieList
            imgPath={imgPath}
            movieName={movieName}
            genre={genre}
            cast={cast}
            cost={cost}
          />
        );
      })}
    </div>
  );
};

export default HomePage;
