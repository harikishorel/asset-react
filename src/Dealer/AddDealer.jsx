import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./AddDealer.css";
import "../common/font.css";
import axios from "axios";

const AddDealer = () => {
  const [name, setName] = useState("");
  const [demail, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [dpassword, setPassword] = useState("");

  const dealerAdd = (e) => {
    e.preventDefault();
    axios
      .post("/AddDealer", { name, demail, branch, dpassword })
      .then((res) => {
        if (res.data.message === "success") {
          alert("Dealer Added Successfully");
        }
        setName("");
        setEmail("");
        setBranch("");
        setPassword("");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <div>
        <div className="cont-1">
          <br />
          <div className="boxcont1">
            <br />
            <h2 className="title" style={{ fontFamily: "Axiforma" }}>
              Add a Dealer
            </h2>

            <form className="login-form" action="POST">
              {/* <form action="#">
                <label className="Email-btn">Status</label>
                <br />
                <select name="languages" id="lang">
                  <option value="Active">Active</option>
                  <option value="In-Active">In-Active</option>
                </select>
              </form> */}
              <label className="Email-btn" htmlfor="text">
                Dealer Name
              </label>
              <input
                required
                type="text"
                placeholder=" Dealer Name"
                id="name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
              <label className="Email-btn" htmlfor="email">
                Email
              </label>
              <input
                required
                type="email"
                placeholder="Dealer email"
                id="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={demail}
              />
              <label className="Email-btn" htmlfor="password">
                Password
              </label>
              <input
                required
                type="password"
                placeholder="*********"
                id="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={dpassword}
              />
              <label className="Email-btn" htmlfor="text">
                Branch Name
              </label>
              <input
                required
                type="text"
                placeholder="Branch Name"
                id="text"
                name="text"
                onChange={(e) => {
                  setBranch(e.target.value);
                }}
                value={branch}
              />
              <br />
              <button className="btD" type="submit" onClick={dealerAdd}>
                Add Dealer
              </button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDealer;
