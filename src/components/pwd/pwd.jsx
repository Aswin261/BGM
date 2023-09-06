import React, { useState } from "react";
import "./pwd.css";

function Pwd() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState("");

  const generatePassword = () => {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$^&*_";
    let result = "";
    for (let i = 0; i < length; i++) {
      if (i === 0) {
        result += charset.charAt(Math.floor(Math.random() * 26));
      } else {
        result += charset.charAt(Math.floor(Math.random() * charset.length));
      }
    }
    setPassword(result);
  };

  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div>
      <h2>Generate a Password</h2>
      <input
        type="range"
        name="length"
        value={length}
        min="1"
        max="20"
        step="1"
        onChange={(e) => setLength(e.target.value)}
      />
      {length}
      <button onClick={generatePassword} className="btn1">
        Generate Password
      </button>
      {password && (
        <p className="gen">
          Your Password: {password}{" "}
          <i
            onClick={copyPasswordToClipboard}
            className="fa-regular fa-copy"
            style={{ color: "#ff4f14" }}
            title="copy"
          ></i>
        </p>
      )}
    </div>
  );
}

export default Pwd;
