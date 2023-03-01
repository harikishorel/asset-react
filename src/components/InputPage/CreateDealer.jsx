import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./CreateDealer.css"
import TextField from "@mui/material/TextField";
import Topbar from '../Repeated/Topbar';
import Bottom from "../Repeated/Bottom";

const CreateDealer = () => {
  return (
    <div>
      <Topbar />
      <div className="CD1">
        <br></br>
      
      <br />
      <br />
      
      <div className="box-cont-B">
        <div className="contan">
          <br/>
          <br/>
          <h1 style={{ display: "flex", justifyContent: "center", fontFamily: "Dennis Sans", color: 'blue' }}>
        Add a Dealer
      </h1>
      <br></br>
      <div className="conton1">
      <TextField
          required
          id="outlined-required"
          label="Name"
          className="input1"
          />
      <br />
      <br />
      <TextField
          required
          id="outlined-required"
          label="User Name"
          className="input1"
        />
      <br />
      <br />
      <TextField
          required
          id="outlined-required"
          label="Company"
          className="input1"
        />
      </div>
<br/><br/>

      <div className="conton2">
      
      <TextField
          required
          id="outlined-required"
          label="Company"
          className="input1"
        />
      <br />
      
      <TextField
          required
          id="outlined-required"
          label="Password"
          className="input1"
        />
      <br />
      
      <TextField
          required
          id="outlined-required"
          label="Branch"
          className="input1"
        />
      <br />
      
      </div>
      <br />
      

    <div className="btndiv">
      <button style={{ backgroundColor: 'BLUE',  }} className="btn1">Add a Dealer</button>
      </div>
      

      <br />
      <br /> 
      </div>     
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

export default CreateDealer;
