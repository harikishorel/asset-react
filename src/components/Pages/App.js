import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../../Asset/LandingPage";
import Dealers from "./Dealers";
import Products from "./Products";
import CreateDealer from "../InputPage/CreateDealer";
import ViewPage from "./ViewPage";
import LoginPage from "../../Asset/LoginPage";
import DealersPage from "../../Dealer/DealersPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/ViewPage" element={<ViewPage />} />
        <Route path="/Dealers" element={<DealersPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/LandingPage/Products" element={<Products />} />
        <Route path="/LandingPage/Dealers" element={<Dealers />} />
        <Route
          path="/LandingPage/Dealers/CreateDealer"
          element={<CreateDealer />}
        />
      </Routes>
    </div>
  );
};

export default App;
