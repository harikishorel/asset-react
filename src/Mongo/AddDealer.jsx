import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import axios from "axios";



const AddDealer = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newDealer = { name, userName, email, password, address };
    axios
      .post("/api/AddDealer", newDealer)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "userName") {
      setUserName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "address") {
      setAddress(value);
    }
  };

  return (
    <div>
      
      <div className="CD1">
        <br></br>
        <br />
        <br />
        <div className="box-cont-B">
          <div className="contan">
            <br />
            <br />
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "sans-serif",
              }}
            >
              Add a Dealer
            </h1>
            <br></br>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <input
                type="text"
                name="userName"
                className="input"
                placeholder="User Name"
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <input
                type="text"
                name="address"
                className="input"
                placeholder="Address"
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <button style={{ backgroundColor: "red", color: "black" }}>
                Add a Dealer
              </button>
            </form>
            <br />
            <br />
          </div>
        </div>
        <br></br>
      </div>
      <br></br>
      <div>
        
      </div>
    </div>
  );
};

export default AddDealer;
