import React, {useState} from "react" 
// import Header from './Header'
// import './LR.css'
import './Box.css'
import HomeAnim from "./HomeAnim"

const Login =() => {
    
   

    return (
        <div>
        
        
<body className="Login-body">
    {/* <div className="l-img"> */}
        
   
        <div className='auth-form-container'>
            <h2 className="Login-name">Login</h2>
            
        <form className="login-form" >
            <label className='Email-btn' htmlfor="email">Email</label>
            <input  type='email' placeholder="Your email" id="email" name="email" />
            <label className='Email-btn' htmlfor="password">password</label>
            <input  type='password' placeholder="*********" id="password" name="password"/>
<button className="btn-btn1" onMouseOver={MouseEvent}>Log IN</button>

        </form>
        
        {/* <button className= "link-btn" onClick={()=>props.onFormSwitch('register')} >Don't have a account? Register Here</button> */}
        </div>
        <img className="l-img" src='https://d38cf3wt06n6q6.cloudfront.net/tyasuitefront/webgpcs/images/asset-management-software.png'/>
        </body>
        
        
        </div>
    )
}

export default Login