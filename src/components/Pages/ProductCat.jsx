// import React, { useState, useEffect } from "react";
// import InputField from "./InputField";
import React from "react";
import Footer from "../repeated/Footer";
import "./ProductCat.css";

const ProductCat = () => {
  return (
    <div>
      <form>
        <div class="input-wrapper">
          <input
            class="input"
            name="text"
            placeholder="Type here..."
            type="text"
          />
        </div>
      </form>

      <br />
      {/* <div class="input-group">
        <input
          type="text"
          class="input"
          placeholder="Add a category"
          autocomplete="off"
        />
        <input class="button--submit" value="Add" type="submit" />
      </div>
      <br />
      <div class="input-group">
        <input
          type="text"
          class="input"
          placeholder="Add a category"
          autocomplete="off"
        /> */}
      <input class="button--submit" value="Add" type="submit" />
      <Footer />
    </div>
    // </div>
  );
};

export default ProductCat;
