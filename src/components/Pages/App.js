import React from "react";
import { Routes, Route } from "react-router-dom";
import Dealers from "./Dealers";
import Login from "../../Asset/Login";

import Products from "./Products";
import CreateProduct from "../InputPage/CreateProduct";
import CreateDealer from "../InputPage/CreateDealer";
import Popup from "../InputPage/popup";
import Deal from "../../Mongo/AddDealer";
import Manufacture from "../../Asset/Manufacture";
import CreateStock from "../InputPage/CreateStock";
import Stock from "../InputPage/Stock";



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/LandingPage/Products" element={<Products />} />
        <Route path="/LandingPage/Dealers" element={<Dealers />} />
        <Route
          path="/LandingPage/Products/CreateProduct"
          element={<CreateProduct />} />
          < Route path="/LandingPage/Dealers/CreateDealer"
          element={<CreateDealer />} />
          <Route path="/popup" element={<Popup />} />
          <Route path="/AddDealer" element={<Deal />} />
          <Route path="/Manufacture" element={<Manufacture />} />
          <Route path="/CreateStock" element={<CreateStock />} />
          <Route path="/AddStock" element={<CreateStock />} />
          <Route path="/Stock" element={<Stock />} />
          
      </Routes>
    </div>
  );
};

export default App;
