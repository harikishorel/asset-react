import React, {useState} from "react" 
import { Route, Routes } from "react-router-dom";
import './LR.css';
import Login from './Login'

import Header from './Header'
import Footer from './Footer'
import Asset from './Asset'
import ProductDealer from "./ProductDealer";
import Dealer from "./Dealer";



function App() {
  // const [currentForm,setCurrentForm]=useState('login');
  
  // const toggleForm = (formName) =>{
  //   setCurrentForm(formName);
  
  
  return (
    <div>
      <Routes>
        
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Asset/>}/>
      </Routes>
  {/* <Header/> */}
    </div>
  );
}

export default App;
