import React from "react";

const Addproduct = () => {
  return (
    <div>
      <label>Product Name:</label>
      <input type="text" id="productName" name="productName" />
      <br />

      <label>Product Description:</label>
      <input type="text" id="productDescription" name="productDescription" />
      <br />

      <button type="submit">Add Product</button>
    </div>
  );
};
export default Addproduct;
