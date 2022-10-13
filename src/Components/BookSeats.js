import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const BookSeats = () => {
  const [seatCount, setSeatCount] = useState(0);
  const [seatsBooked, setSeatsBooked] = useState([]);
  const [seatsPreBooked, setPreSeatsBooked] = useState([
    "A2",
    "C5",
    "E4",
    "E5",
  ]);
  const location = useLocation();
  // console.log(location);
  const data = location.state;
  console.log("hiii", data);
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
      <p>
        ₹<strong> {data.cost}.00</strong>/seat (including GST)
      </p>
      <p>All eyes this way please!</p>
      <img
        id="theatreScreen"
        src="./theatreScreen.png"
        alt="theatre screen"
      ></img>

      <div className="seats">
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
        <div className="seatA">
          <small>A</small>&nbsp;
          <input
            id="A1"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("A1")}
          ></input>
          <input
            id="A2"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("A2")}
          ></input>
          <input
            id="A3"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("A3")}
          ></input>
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <input
            id="A5"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("A5")}
          ></input>
          <input
            id="A6"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("A6")}
          ></input>
          <input
            id="A7"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("A7")}
          ></input>
        </div>
        <div className="seatB">
          <small>B</small>&nbsp;
          <input
            id="B1"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("B1")}
          ></input>
          <input
            id="B2"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("B2")}
          ></input>
          <input
            id="B3"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("B3")}
          ></input>
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <input
            id="B5"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("B5")}
          ></input>
          <input
            id="B6"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("B6")}
          ></input>
          <input
            id="B7"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("B7")}
          ></input>
        </div>
        <div className="seatC">
          <small>C</small>&nbsp;
          <input
            id="C1"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("C1")}
          ></input>
          <input
            id="C2"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("C2")}
          ></input>
          <input
            id="C3"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("C3")}
          ></input>
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <input
            id="C5"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("C5")}
          ></input>
          <input
            id="C6"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("C6")}
          ></input>
          <input
            id="C7"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("C7")}
          ></input>
        </div>
        <div className="seatD">
          <small>D</small>&nbsp;
          <input
            id="D1"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("D1")}
          ></input>
          <input
            id="D2"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("D2")}
          ></input>
          <input
            id="D3"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("D3")}
          ></input>
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <input
            id="D5"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("D5")}
          ></input>
          <input
            id="D6"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("D6")}
          ></input>
          <input
            id="D7"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("D7")}
          ></input>
        </div>
        <div className="seatF">
          <small>E</small>&nbsp;
          <input
            id="E1"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("E1")}
          ></input>
          <input
            id="E2"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("E2")}
          ></input>
          <input
            id="E3"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("E3")}
          ></input>
          <input
            id="E4"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("E4")}
          ></input>
          <input
            id="E5"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("E5")}
          ></input>
          <input
            id="E6"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("E6")}
          ></input>
          <input
            id="E7"
            type="checkbox"
            onChange={handleSeat}
            disabled={seatsPreBooked.includes("E7")}
          ></input>
        </div>
        <div className="dummyCheckboxes">
          <span>
            Available
            <input
              type="checkbox"
              disabled
              checked={false}
              readOnly
              style={{ outline: "1px outset green" }}
            ></input>
          </span>
          <span>
            Sold
            <input type="checkbox" disabled readOnly></input>
          </span>
          <span>
            Selected
            <input type="checkbox" checked readOnly></input>
          </span>
        </div>

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
