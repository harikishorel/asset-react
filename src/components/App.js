import React from "react";
import { Routes, Route } from "react-router-dom";
import Assetupload from "./Assetupload.jsx";
import Header from "./Head";
import Manufacturemenu from "./Manufacturemenu";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="Manufacturemenu" element={<Manufacturemenu />} />
        <Route path="Assetupload" element={<Assetupload />} />
      </Routes>
    </div>
  );
};

export default App;
