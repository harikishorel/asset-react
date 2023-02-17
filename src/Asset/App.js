import React from "react";
import Assetupload from "../components/Assetupload.jsx";
import Header from "./header";
import Manufacturemenu from "../components/Manufacturemenu";
import { Routes,Route } from "react-router-dom";
import Asset from "./Asset";
import fakedata from './Dummy-Data.json'
import {useTable} from 'react-table'


const App = () => {
  
  return (
    
    <div>
      
      {/* <Routes>
        <Route path='Asset' element={<Asset /> } />
      </Routes>
      <Header />
      <Manufacturemenu />
      <Assetupload /> */}
     {/* <Header/>  */}
     
      <Asset />

    </div>
  );
};

export default App;
