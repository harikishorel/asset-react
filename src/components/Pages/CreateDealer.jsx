import React from "react";
import "./CreateDealer.css";
import "bootstrap/dist/css/bootstrap.css";
// import Container from "react-bootstrap/Container";

// import Navbar from "react-bootstrap/Navbar";
import Header from "../repeated/header";

const CreateDealer = () => {
  return (
    <div>
      <Header />
      {/* <>
        <Navbar style={{ backgroundColor: "#461b7e" }} variant="dark">
          <Container>
            <Navbar.Brand href="#home">AssetWarranty</Navbar.Brand>
          </Container>
        </Navbar>
      </> */}
      <br />
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Add a Dealer
      </h1>
      <br />
      <br />

      <div class="group">
        <input required="" type="text" class="input" />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Name</label>
      </div>
      <br />
      <br />
      <div class="group">
        <input required="" type="text" class="input" />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Dealer Id</label>
      </div>
      <br />
      <br />
      <div class="group">
        <input required="" type="email" class="input" />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Email Id</label>
      </div>
      <br />
      <br />
      <div class="group">
        <input required="" type="password" class="input" />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Password</label>
      </div>
      <br />
      <br />
      <div class="group">
        <input required="" type="password" class="input" />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Confirm Password</label>
      </div>
      <br />
      <br />
      <div class="group">
        <input required="" type="text" class="input" />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Address</label>
      </div>
      <br />
      <>
        <button className="button2">Submit</button>
      </>

      <br />
    </div>
  );
};

export default CreateDealer;
