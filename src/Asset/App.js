import React, {useState} from "react" 
import { Route, Routes } from "react-router-dom";
import './LR.css';
import Login from './Login'

import Header from './Header'
import Footer from './Footer'
import Asset from './Asset'
import ProductDealer from "./ProductDealer";
import Dealer from "./Dealer";
import Manufacturelanding from "./Manufacture-landing";
import Addproduct from "./Addproduct";
import ManuEdit from "./ManuEdit";
import DealersPage from "./DealersPage";


function App() {
  // const [currentForm,setCurrentForm]=useState('login');
  
  // const toggleForm = (formName) =>{
  //   setCurrentForm(formName);
  
  
  return (
    <div>
      <Routes>
        
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Asset/>}/>
      <Route path ="/addproduct" element={<Addproduct/>} />
      <Route path ="/editproduct" element={<DealersPage/>} />

      </Routes>
  {/* <Header/> */}
  {/* <Login/> */}
  {/* <Addproduct1 /> */}
  {/* <ManuEdit /> */}
    </div>
  );
}

export default App;
