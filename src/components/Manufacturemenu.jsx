import React from 'react';
import './Manufacturemenu.css';

function Manufacturemenu() {
  return (
    <div className="w3-content">
      {/* Header */}
      <header className="w3-panel w3-center w3-opacity">
        <h1 className="w3-xlarge">Asset Warranty</h1>
        <h1>Manufacture</h1>
        <div className="w3-padding-32">
          <div className="w3-bar w3-border">
            <button className="w3-bar-item w3-button" onclick="goToHome()">Product</button>
            <button className="w3-bar-item w3-button w3-light-grey" onclick="goToDealers()">Dealers</button>
            <button className="w3-bar-item w3-button" onclick="goToProduct()">Mention Product</button>
            <button className="w3-bar-item w3-button w3-hide-small" onclick="logout()">Logout</button>

          </div>
        </div>
      </header>

      {/* Photo Grid */}
      <div className="image-container">
        <br/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuN1nK_BKi8RQcA-LKYjDPy2I4QNsFmF3lJw&usqp=CAU" alt='' />
          
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUiCEjd7giHbsH-PKIcWCmOwGHcJuU7k7mA&usqp=CAU" alt='' />
          
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9DHvrC9Tv4vCu_5I-etbKbN5vVToO_KTRvvUf7oYxzoBRN8ZxAbg-769gfR0oGYilEzw&usqp=CAU" alt='' />
          
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_85-xnbTBcgE1nSDRezUc-I26B2qx68bWCQ&usqp=CAU" alt=''  />
      </div>
      </div>)
      
 
}

export default Manufacturemenu;

