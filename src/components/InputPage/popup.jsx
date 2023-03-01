



import React, { useState } from "react";
import Bottom from "../Repeated/Bottom";
import Topbar from "../Repeated/Topbar";
import "./CreateProduct.css";

function CreateProduct() {
  return (
    <div className="CP1">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "sans-serif",
          color: "black",
          fontSize: "30px",
        }}
      >
        Add a Product
      </h1>
      <input type="text" className="input" placeholder="Product Name"></input>
      <br />
      <br />
      <input type="text" className="input" placeholder="Product ID"></input>
      <br />
      <br />
      <input
        type="text"
        className="input"
        placeholder="Product Description"
      ></input>
      <br />
      <br />
      <button style={{ backgroundColor: "red", color: "black" }}>
        Add Product
      </button>
    </div>
  );
}

function Popup() {
  const [showCreateProduct, setShowCreateProduct] = useState(false);

  const handleAddProductClick = () => {
    setShowCreateProduct(true);
  };

  const handleClosePopup = () => {
    setShowCreateProduct(false);
  };

  return (
    <div>
      <Topbar />
      <div className="CP1">
        <br />
        <br />
        <div className="box-cont-c">
          <div className="condan">
            <br />
            <br />
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "sans-serif",
                color: "black",
                fontSize: "30px",
              }}
            >
              Product
            </h1>
            <br></br>
            <button
              style={{ backgroundColor: "red", color: "black" }}
              onClick={handleAddProductClick}
            >
              Add Product
            </button>
            <br />
            <br />
          </div>
        </div>
        <br></br>
      </div>
      <br></br>
      {showCreateProduct && (
        <div className="popup">
          <div className="popup-inner">
            <button onClick={handleClosePopup}>Close</button>
            <CreateProduct />
          </div>
        </div>
      )}
      <Bottom />
    </div>
  );
}

export default Popup;






