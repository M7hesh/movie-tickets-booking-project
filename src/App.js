import React from "react";
import MovieList from "./Components/MovieList";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PaymentSuccessfulPage from "./Components/PaymentSuccessfulPage";
import TicketPayment from "./Components/TicketPayment";
const MOVIES_DATA = [
  {
    imgPath: "./pushpa.jpg",
    movieName: "Pushpa: The Rise - Part 1",
    genre: "Action, Adventure, Crime",
    cast: "Allu Arjun, Rashmika Mandanna",
  },
  {
    imgPath: "./brahmastra.jpg",
    movieName: "Brahmãstra Part 1: Shiva",
    genre: "Action, Adventure, Fantasy",
    cast: "Ranbir Kapoor, Alia Bhatt",
  },
  {
    imgPath: "./bahubali.jpg",
    movieName: "Bãhubali: The Beginning",
    genre: "Action, Drama",
    cast: "Prabhas, Rana Daggubati",
  },
  {
    imgPath: "./RRR.jpg",
    movieName: "RRR (Rise Roar Revolt)",
    genre: "Action, Drama",
    cast: "N.T.R, Ram Charan",
  },
  {
    imgPath: "./kgf2.jpg",
    movieName: "K.G.F: Chapter 2",
    genre: "Action, Crime, Drama",
    cast: "Yash, Sunjay Dutt, Raveena Tondon",
  },
];

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="movies">
        {MOVIES_DATA.map((movie) => {
          const { imgPath, movieName, genre, cast } = movie;
          return (
            <MovieList
              imgPath={imgPath}
              movieName={movieName}
              genre={genre}
              cast={cast}
            />
          );
        })}
      </div> */}
      <TicketPayment />
      {/* <PaymentSuccessfulPage /> */}
      <Footer />
    </>
  );
}

export default App;
