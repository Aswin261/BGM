import React, { useState } from "react";
import "./seats.css";

function Seats(props) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [count, setCount] = useState(0);

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
      setCount(count - 1);
    } else {
      setSelectedItems([...selectedItems, item]);
      setCount(count + 1);
    }
  };

  const display = () => {
    alert(`Payment done successfully. Total Fare: ₹${count * props.amt}`);
    setCount(0);
    setSelectedItems([]);
  };
  const isItemSelected = (item) => selectedItems.includes(item);

  return (
    <div>
      <div className="container">
        <p className="text">FRONT</p>
        <div className="grid-container">
          {Array.from({ length: 49 }, (_, index) => (
            <div
              key={index}
              className={`grid-item ${
                isItemSelected(index + 1) ? "selected" : ""
              } ${index === 24 ? "break" : ""}`}
              onClick={() => handleItemClick(index + 1)}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <p className="right">REAR</p>
      </div>
      {count > 0 && (
        <div class="count">
          <p className="arr-dep">
            {/* <span className=""> From</span> */}
            {props.from}
            <span
              className=""
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              To
            </span>
            {props.to}
          </p>
          <p>Seats Selected:{selectedItems.join(",")}</p>
          <p>Total Fare: &#8377; {count * props.amt}</p>
          <button
            class="payment"
            onClick={() => {
              display();
            }}
          >
            Continue Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default Seats;
