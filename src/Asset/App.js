import React, {useState} from "react" 

import './LR.css';
import Login from './Login'
import Register from './Register'
import Header from './header'
import Footer from './Footer'
import Asset from './Asset'
import ProductDealer from "./ProductDealer";

function App() {
  const [currentForm,setCurrentForm]=useState('login');
  
  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }
  
  return (
    <div>
    <Header />
{/*     
 <Login /> */}
 
 {/* <Asset /> */}
 <ProductDealer />
 
    <Footer />
    </div>
  );
}

export default App;
