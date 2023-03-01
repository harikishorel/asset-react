import React from "react";
import Bottom from "../Repeated/Bottom";
import Topbar from "../Repeated/Topbar";
import TextField from "@mui/material/TextField";
import "./ViewPage.css";

function ViewPage() {
  return (
    <div>
      <Topbar />
      <br />
      <div className="box-cont-c">
        <br />
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name"
            // defaultValue="Hello World"
          />
          <br />
          <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            // autoComplete="current-password"
          />
          <br />
          <br />
          <TextField
            disabled
            id="outlined-disabled"
            label="Name"
            defaultValue="Product Name"
          />
          <br />
          <br />
          <TextField
            id="outlined-read-only-input"
            label="Product Name"
            defaultValue="ProductName"
            InputProps={{
              readOnly: true,
            }}
          />
          <br />
          <br />
        </div>
      </div>
      <br />
      <Bottom />
    </div>
  );
}

export default ViewPage;
