<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Asset/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

>>>>>>> 2cdfdff5e4dc884239301e9ace9b76f3a3ef9305

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
  <React.StrictMode>
    <BrowserRouter>
      <App />
=======
  
<React.StrictMode>
<BrowserRouter> 
    <App />
>>>>>>> 2cdfdff5e4dc884239301e9ace9b76f3a3ef9305
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
