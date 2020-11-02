import React from "react";
import "./App.css";

function contact() {
  return (
    <div className="form">
      <h2>Contact</h2>
      <br />
      <br />
      <input
        type="text"
        placeholder="First Name"
        style={{
          padding: "10px",
          boxShadow: "5px 5px 5px 1px",
          border: "none",
        }}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Last Name"
        style={{
          padding: "10px",
          boxShadow: "5px 5px 5px 1px",
          border: "none",
        }}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Email Address"
        style={{
          padding: "10px",
          boxShadow: "5px 5px 5px 1px",
          border: "none",
        }}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Age"
        style={{
          padding: "10px",
          boxShadow: "5px 5px 5px 1px",
          border: "none",
        }}
        required
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        style={{
          padding: "10px",
          boxShadow: "5px 5px 5px 1px",
          border: "none",
        }}
        required
      />
      <br />
      <input
        type="password"
        placeholder="Confirm Password"
        style={{
          padding: "10px",
          boxShadow: "5px 5px 5px 1px",
          border: "none",
        }}
        required
      />
      <br />
      <br />
      <input
        type="submit"
        style={{
          padding: "15px",
          backgroundColor: "rgb(42,34,34)",
          color: "white",
          borderRadius: "15px",
        }}
        required
      />
    </div>
  );
}

export default contact;
