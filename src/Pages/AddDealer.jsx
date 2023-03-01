import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./AddDealer.css";
// import TextField from "@mui/material/TextField";
// import Footerr from "../components/Repeated/Footerr";
// import Topbar from "../components/Repeated/Topbar";
import "../common/font.css";
// import { fontFamily } from "@mui/system";

const AddDealer = () => {
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
              <label className="Email-btn" htmlfor="text">
                Dealer Name
              </label>
              <input
                required
                type="text"
                placeholder=" Dealer Name"
                id="name"
                name="name"
                //   onChange={(e) => {
                //     setEmail(e.target.value);
                //   }}
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
                //   onChange={(e) => {
                //     setEmail(e.target.value);
                //   }}
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
                //   onChange={(e) => {
                //     setPassword(e.target.value);
                //   }}
              />
              <label className="Email-btn" htmlfor="text">
                Branch Name
              </label>
              <input
                required
                type="text"
                placeholder="Branch Name"
                // id="text"
                // name="text"
                //   onChange={(e) => {
                //     setEmail(e.target.value);
                //   }}
              />
              <br />
              <button className="bt" type="submit">
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
