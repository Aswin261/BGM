import React, { useState, useEffect } from "react";
import "./ticket.css";
import { buses } from "./buslist";
import Seats from "./seats";

function BusTicket() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSeat, setShowSeat] = useState(null);

  useEffect(() => {
    if (searchResults.length > 0) {
      scroll();
    }
  }, [searchResults]);

  function scroll() {
    window.scrollTo({
      top: 1200,
      behavior: "smooth",
    });
  }

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredBuses = buses.filter(
      (bus) =>
        bus.Departure.toLowerCase() === from.toLowerCase() &&
        bus.Arrival.toLowerCase() === to.toLowerCase()
    );
    setSearchResults(filteredBuses);
  };
  const message = (bus) => {
    setShowSeat(bus);
  };
  return (
    <div>
      <div className="bus">
        <p class="title">BOOK BUS TICKETS</p>
        <form className="ticket-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Leaving from"
            value={from}
            onChange={(event) => setFrom(event.target.value)}
          />
          <i
            className="fa-solid fa-bus fa-2xl"
            style={{ color: "#000000" }}
          ></i>
          <input
            type="text"
            placeholder="Going to"
            value={to}
            onChange={(event) => setTo(event.target.value)}
          />
          <i
            className="fa-solid fa-location-dot fa-2xl"
            style={{ color: "#000000" }}
          ></i>
          <input
            placeholder="Date of Journey"
            className="textbox-n"
            type="date"
            onFocus={(event) => (event.target.type = "date")}
            onBlur={(event) => (event.target.type = "text")}
            id="date"
          />
          <button className="ticket-btn" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="images">
        <img
          src="https://static.abhibus.com/busgallery/offerbanners/Nov2022/30/1669819906/476X220.webp"
          alt=""
        />
        <img
          src="https://static.abhibus.com/busgallery/offerbanners/Dec2022/30/1672393950/476X220.webp"
          alt=""
        />
        <img
          src="https://static.abhibus.com/busgallery/offerbanners/May2023/01/1682946099/476X220.webp"
          alt=""
        />
      </div>
      <div>
        {searchResults.map((bus) => (
          <div
            key={`${bus.Departure}`}
            className={`list ${showSeat === bus ? "enlarged" : "medium"}`}
          >
            <p class="name">{bus.name}</p>
            <span class="loc-icon">
              <i
                class="fa-solid fa-location-dot fa-2xl"
                style={{ color: "#ff3814" }}
              ></i>
            </span>
            <div class="time">
              <p class="dtime">{bus.Dtime}</p>
              <i
                class="fa-solid fa-arrow-down-long"
                style={{ color: "#8f8f8f" }}
              ></i>
              <span class="duration">{bus.Duration} hours</span>
              <p class="atime"> {bus.Atime}</p>
            </div>
            <p className="price">&#8377;{bus.price}</p>
            <p className="rating">
              <i class="fa-solid fa-star" style={{ color: "#12ce15" }}></i>
              <span style={{ marginTop: "10px" }}>{bus.rating}</span>
            </p>
            <p class="type">{bus.type}</p>
            <p class="avail">{bus.Available} Seats Available</p>
            <button
              class="seat"
              onClick={() => {
                message(bus);
              }}
            >
              SELECT SEAT
            </button>
            <p>
              {" "}
              {showSeat === bus && (
                <Seats amt={bus.price} from={bus.Departure} to={bus.Arrival} />
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusTicket;
