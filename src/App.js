// import Carousel from "./Test/Carousel";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Addproduct from "./Test/Addproduct";
// import ProductDealer from "./Test/ProductDealer";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Carousel />} />
        <Route path="/dealer" element={<ProductDealer />} /> */}
        <Route path="/" element={<Addproduct />} />
      </Routes>
    </div>
  );
}

export default App;
