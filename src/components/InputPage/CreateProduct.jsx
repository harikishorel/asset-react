import React from "react";
import Bottom from "../Repeated/Bottom";
import Topbar from "../Repeated/Topbar";
import "./CreateProduct.css";
import TextField from "@mui/material/TextField";

function CreateProduct() {
  return (
    <div>
      <Topbar />
      <div className="CP1">
      <br></br >
      
<br />
<br />
<div className="box-cont-c">
<div className="condan">
          <br/>
          <br />
          <h1 style={{ display: "flex", justifyContent: "center", fontFamily: "sans-serif", color:"black", fontSize: "30px" }}>
        Add a Product
      </h1>
          <br></br>
          <div className="p1">
      <input type="text" class="input" placeholder="Product Name"></input>
      <TextField
          required
          id="outlined-required"
          label="Product Name"
          className="input"
        />
      <br />
      <br />
      
      <input type="text" class="input" placeholder="Product ID"></input>
      <br />
      <br />
      <input type="text" class="input" placeholder="Product Discribution"></input>
      <br />
      <br/>
      <input type="text" class="input" placeholder="Manufactured Place"></input>
      <br />
      <br />
      </div>
      <div className="p2">
      
      <select value="" class="input1" placeholder="Model" onChange="handleModelSelect()">
      <option value="">Select a model</option>
      <option value="model1">Model 1</option>
      <option value="model2">Model 2</option>
      <option value="model3">Model 3</option>
    </select>
    <br />
      
      <select value=""  class="input1" placeholder="Category" onChange="handleCategorySelect()">
      <option value="">Select a category</option>
      <option value="category1">Category 1</option>
      <option value="category2">Category 2</option>
      <option value="category3">Category 3</option>
    </select>
    <br />
    
      <select value=""  class="input1" placeholder="Status" onChange="handleStatusSelect()">
      <option value="">Select a status</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
    <br />
    
    <input type="file" class="input2" placeholder="upload warrenty"></input>
      <br />
      <br />
    </div>

    <div className="btndiv1">
      <button style={{ backgroundColor: 'BLUE',  }} className="btn1">Add a Dealer</button>
      </div>

      <br />
      <br />
      
      
      
      </div>
      <br></br>
      </div>
      <br></br>
      <br />
      <br />
      </div>
      
      <div>
      <Bottom />
    </div>
    </div>
  );
};

export default CreateProduct;
