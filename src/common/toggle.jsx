import React from "react";
import "./toggle.css";

function Toggler() {
  return (
    <div>
      <div class="switch-button">
        <input class="switch-button-checkbox" type="checkbox"></input>
        <label class="switch-button-label" for="">
          <span class="switch-button-label-span">Active</span>
        </label>
      </div>
    </div>
  );
}

export default Toggler;
