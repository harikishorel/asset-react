import React, {useState} from "react" 
// import Header from './Header'
// import './LR.css'
import './Box.css'

const Login =() => {
    
   

    return (
        
        
<body className="Login-body">
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
        </body>
    )
}

export default Login