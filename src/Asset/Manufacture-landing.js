
import React from 'react'
import Header from './Header'
import "./Manufacuturelanding.css"

function Manufacturelanding() {
  return (
    <div>
        <Header />
        <div className="topc">

        
    <div className='content'>
      <h1  style={{color:'red',fontSize:'45px' }}>Assign and manage</h1>
      
    <h2  style={{fontSize:'30px',fontFamily:'sans-serif'}} >your products here</h2>
    <br />
      <h2 style={{fontSize:'15px',color:'grey'}}> Developing a comprehensive warranty strategy, understanding warranty terms and conditions, and handling warranty claims efficiently, manufacturers and dealers can provide customers with high-quality products and services and maintain customer satisfaction.</h2>
      </div>
    <div className='img-lod'>
        <img src="https://uploads-ssl.webflow.com/60edc0a8835d5b38bf11f03f/626f8d2d3bbad57c3a55c11f_Barcode-Based%20Asset%20Tracking%20Software.jpg"></img>
        </div>
    </div>
    <div className='twop' >
<div className='row1'>
<h2 style={{fontSize:'25px',fontWeight:'600'}}>save time</h2><br/><br/><br/>
<h2 style={{fontSize:'15px',fontWeight:'400'}}>Don’t waste money on parts and labor that are covered under warranty. You can access secure warranty information in UpKeep that lets you order covered parts or schedule covered repairs.</h2>
</div>
<div className='row2'>
<h2 style={{fontSize:'25px',fontWeight:'600'}}>Attach warranties to assets</h2><br/>
<h2 style={{fontSize:'15px',fontWeight:'400'}}>Upload warranty documents to your assets. This way, when viewing assets in UpKeep, you can easily see what’s covered without leaving the CMMS.</h2>
</div>
<div className='row3'>
<h2 style={{fontSize:'25px',fontWeight:'600'}}>Access documentation for precision</h2><br/>
<h2 style={{fontSize:'15px',fontWeight:'400'}}>Show the documentation that you are following the exact stipulations that are covered by warranty. Each agreement is different, so UpKeep allows you to manage complex agreements in one place to receive repair services requested from the original vendor.</h2>
</div>

    </div>
    </div>

  )
}

export default Manufacturelanding
