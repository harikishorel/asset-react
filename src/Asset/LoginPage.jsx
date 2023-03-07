import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "../common/font.css";
// import Footerr from "../components/Repeated/Footerr";

const LoginPage = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/LandingPage", { state: { id: email } });
          } else if (res.data === "notexist") {
            alert("There is no such user");
          }
        })
        .catch((e) => {
          alert("wrong detail");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <br />
      <h1 className="head" style={{ fontFamily: "Axiforma" }}>
        Asset Warrenty
      </h1>
      <br />
      <br />
      <div>
        <br />
        <div>
          <div className="img">
            <br />
            <div className="boxcont">
              <br />
              <h2 className="title">Welcome</h2>

              <form className="login-form" action="POST">
                <label className="Email-btn" htmlfor="email">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  id="email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <br />
                <label className="Email-btn" htmlfor="password">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="*********"
                  id="password"
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <br />
                <button className="bt" type="submit" onClick={submit}>
                  Log In
                </button>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="head2" style={{ fontFamily: "Axiforma" }}>
        Copyright &copy; 2023 | Asset Warrenty
      </div>
    </div>
  );
};

export default LoginPage;
