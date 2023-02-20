import React from "react";
import "./ViewPage.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

const ViewPage = () => {
  return (
    <div>
      <>
        <Navbar style={{ backgroundColor: "#461b7e" }} variant="dark">
          <Container>
            <Navbar.Brand href="#home">AssetWarranty</Navbar.Brand>
          </Container>
        </Navbar>
      </>
      <br />
      <h1 className="title"> Product Details </h1>
      <br />
      <h2 className="value">Initial Details</h2>
      <br />
      <div className="cards">
        <h3>Product Name: Example Data</h3>
        <br />
        <h3>Product Id: Example Data</h3>
        <br />
        <h3>Manufacturer: Example Data</h3>
        <br />
        <h3>Retailer: Example Data</h3>
        <br />
        <h3>Warrenty Period : Example Data</h3>
        <br />
      </div>
      <br />
      <br />

      <h2 className="value">Purchase Details</h2>
      <br />
      <div className="cards">
        <h3>Purchased By: Example Data</h3>
        <br />
        <h3>Purchased Date: Example Data</h3>
        <br />
        <h3>Warrenty End-date: Example Data</h3>
        <br />
        <h3>Retailer Id: Example Data</h3>
        <br />
      </div>
      <br />
      <br />
      <h2 className="value">Warrenty Status</h2>
      <br />
      <div className="cards">
        <h3>
          Warrenty File: <button className="button button1">view file</button>
        </h3>
        <br />
        <h3>Claimed Status: Example Data</h3>
        <br />
      </div>
      <br />
      <form className="footer">End</form>
    </div>
  );
};

export default ViewPage;
