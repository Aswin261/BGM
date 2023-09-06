import React, { useState } from "react";
import Hangman from "./game/hangman";
import "./tabs.css";
import Pwd from "./pwd/pwd";
import BusTicket from "./ticket/ticket";
import Notes from "./pwd/notes";
import Navbar from "../flipkart/navbar";

function Tablist() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <ul className="nav nav-pills" role="tablist">
        <li className={`nav-item ${index === 0 ? "active" : ""}`}>
          <div
            className="nav-link"
            data-toggle="pill"
            role="tab"
            onClick={() => {
              setIndex(0);
            }}
          >
            Bus Ticket
          </div>
        </li>
        <li className={`nav-item ${index === 1 ? "active" : ""}`}>
          <div
            className="nav-link"
            data-toggle="pill"
            role="tab"
            onClick={() => {
              setIndex(1);
            }}
          >
            Game
          </div>
        </li>
        <li className={`nav-item ${index === 2 ? "active" : ""}`}>
          <div
            className="nav-link"
            id="create"
            data-toggle="pill"
            role="tab"
            onClick={() => {
              setIndex(2);
            }}
          >
            Misc
          </div>
        </li>
        <li className={`nav-item ${index === 3 ? "active" : ""}`}>
          <div
            className="nav-link"
            id="search"
            data-toggle="pill"
            role="tab"
            onClick={() => {
              setIndex(3);
            }}
          >
            Flipkart
          </div>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade show active" hidden={index !== 0}>
          <BusTicket />
        </div>
        <div className="tab-pane fade show active" hidden={index !== 1}>
          <Hangman />
        </div>
        <div
          className="tab-pane fade show active"
          hidden={index !== 2}
          id="misc"
        >
          <Pwd />
          <Notes />
        </div>
        <div className="tab-pane fade show active" hidden={index !== 3}>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Tablist;
