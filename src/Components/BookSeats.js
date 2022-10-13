import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const BookSeats = () => {
  const [seatCount, setSeatCount] = useState(0);
  const [seatsBooked, setSeatsBooked] = useState([]);
  const [proceed, setProceed] = useState(false);
  const location = useLocation();
  console.log(location);
  const data = location.state;
  // console.log(data);
  const navigate = useNavigate();

  const handleSeat = (e) => {
    if (e.target.checked === true) {
      setSeatCount(seatCount + 1);
      seatsBooked.push(e.target.id);
      document.getElementById("proceedError").innerHTML = "";
    } else {
      setSeatCount(seatCount - 1);
      seatsBooked.splice(seatsBooked.indexOf(e.target.id), 1);
    }
  };

  const handleSeatsBooking = () => {
    if (seatCount) {
      navigate("/payment", {
        state: { ...data, seatCount, seatsBooked },
      });
    } else {
      document.getElementById("proceedError").innerHTML =
        "Please book atleast 1 seat!";
    }
  };

  console.log(seatCount, seatsBooked);
  // {imgPath: './RRR.jpg', movieName: 'RRR (Rise Roar Revolt)', genre: 'Action, Drama', cast: 'N.T.R, Ram Charan'}
  return (
    <div className="booking">
      <h2>{data.movieName}</h2>
      <img id="movieImg" src={data.imgPath} alt="movie poster"></img>
      <p>All eyes this way please!</p>
      <img
        id="theatreScreen"
        src="./theatreScreen.png"
        alt="theatre screen"
      ></img>
      <div className="seats">
        {/* <label class="container">
        <input type="checkbox" />
        <span class="checkmark"></span>
        </label> */}
        <div className="seatA">
          <small>A</small>&nbsp;
          <input id="A1" type="checkbox" onChange={handleSeat}></input>
          <input id="A2" type="checkbox" onChange={handleSeat}></input>
          <input id="A3" type="checkbox" onChange={handleSeat}></input>
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <input id="A4" type="checkbox" onChange={handleSeat}></input>
          <input id="A5" type="checkbox" onChange={handleSeat}></input>
          <input id="A6" type="checkbox" onChange={handleSeat}></input>
        </div>
        <div className="seatB">
          <small>B</small>&nbsp;
          <input id="B1" type="checkbox" onChange={handleSeat}></input>
          <input id="B2" type="checkbox" onChange={handleSeat}></input>
          <input id="B3" type="checkbox" onChange={handleSeat}></input>
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <input id="B4" type="checkbox" onChange={handleSeat}></input>
          <input id="B5" type="checkbox" onChange={handleSeat}></input>
          <input id="B6" type="checkbox" onChange={handleSeat}></input>
        </div>
        <div className="seatC">
          <small>C</small>&nbsp;
          <input id="C1" type="checkbox" onChange={handleSeat}></input>
          <input id="C2" type="checkbox" onChange={handleSeat}></input>
          <input id="C3" type="checkbox" onChange={handleSeat}></input>
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <input id="C4" type="checkbox" onChange={handleSeat}></input>
          <input id="C5" type="checkbox" onChange={handleSeat}></input>
          <input id="C6" type="checkbox" onChange={handleSeat}></input>
        </div>
        <div className="seatD">
          <small>D</small>&nbsp;
          <input id="D1" type="checkbox" onChange={handleSeat}></input>
          <input id="D2" type="checkbox" onChange={handleSeat}></input>
          <input id="D3" type="checkbox" onChange={handleSeat}></input>
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <input id="D4" type="checkbox" onChange={handleSeat}></input>
          <input id="D5" type="checkbox" onChange={handleSeat}></input>
          <input id="D6" type="checkbox" onChange={handleSeat}></input>
        </div>
        <div className="seatF">
          <small>E</small>&nbsp;
          <input id="E1" type="checkbox" onChange={handleSeat}></input>
          <input id="E2" type="checkbox" onChange={handleSeat}></input>
          <input id="E3" type="checkbox" onChange={handleSeat}></input>
          <input id="E4" type="checkbox" onChange={handleSeat}></input>
          <input id="E5" type="checkbox" onChange={handleSeat}></input>
          <input id="E6" type="checkbox" onChange={handleSeat}></input>
          <input id="E7" type="checkbox" onChange={handleSeat}></input>
        </div>

        <small className="rowNumber">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </small>
        <p id="proceedError" style={{ color: "red", margin: "4px" }}></p>
      </div>
      <div className="bookingBtn">
        <Link to={"/"}>
          <button className="bookingBackBtn">Back</button>
        </Link>
        {/* <Link to={"/payment"}>
          <button
            className="bookingProccedBtn"
            state={{ data, seatCount, seatsBooked }}
          >
            Proceed
          </button>
        </Link> */}
        <button className="bookingProccedBtn" onClick={handleSeatsBooking}>
          Proceed
        </button>
      </div>
    </div>
  );
};

export default BookSeats;
