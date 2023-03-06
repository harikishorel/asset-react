
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import "./Manufacuturelanding.css"
import './font2.css'

function Manufacturelanding() {
const rows = document.querySelectorAll('.twop > div');

rows.forEach(row => {
  row.addEventListener('click', () => {
    row.classList.toggle('animate');
  });
});

  return (
    <div>
<header className="manufacturing-header">
  <Header/>
</header>
        <div className="topc">

        
    <div className='content'  style={{ fontFamily: 'Helvetica Now' }}>
      <h1  style={{color:'red',fontSize:'45px' }}>Assign and manage</h1>
      
    <h2  style={{fontSize:'30px',fontFamily:'sans-serif'}} >your products here</h2>
    <br />
      <h2 style={{fontSize:'15px',color:'grey'}}> Developing a comprehensive warranty strategy, understanding warranty terms and conditions, and handling warranty claims efficiently, manufacturers and dealers can provide customers with high-quality products and services and maintain customer satisfaction.</h2>
      </div>
    <div className='img-lod'>
        <img src="https://timebusinessnews.com/wp-content/uploads/CriticalAssetTracking-1600x945-01-1-800x445.jpg"></img>
        </div>
    </div>
    <div className='twop'  style={{ fontFamily: 'Helvetica Now' }}>
  <div className='row1'>
    <div className='logo'>
      <img src='./logo1.png' alt='Logo 1'/>
    </div>
    <h2 style={{fontSize:'25px',fontWeight:'600'}}>MANUFACTURER</h2><br/>
    <h2 style={{fontSize:'15px',fontWeight:'400'}}>Manufacturers are responsible for adding products to their inventory and managing dealer allocations by efficiently assigning available stock to authorized dealers, ensuring a streamlined distribution process.</h2>
  </div>
  <div className='row2'>
    <div className='logo'>
      <img src='./logo2.png' alt='Logo 2'/>
    </div>
    <h2 style={{fontSize:'25px',fontWeight:'600'}}>DEALER</h2><br/>
    <h2 style={{fontSize:'15px',fontWeight:'400'}}>Authorized dealers are responsible for managing their allocated stock, maintaining accurate inventory counts, and facilitating sales transactions to ensure optimal product availability and customer satisfaction.</h2>
  </div>
  <div className='row3'>
    <div className='logo'>
      <img src='./logo3.png' alt='Logo 3'/>
    </div>
    <h2 style={{fontSize:'25px',fontWeight:'600'}}>CUSTOMER</h2><br/>
    <h2 style={{fontSize:'15px',fontWeight:'400'}}>Customers can access product details and warranty information by scanning the QR code, which enables quick and convenient access to essential information, enhancing the overall customer experience.



</h2>
  </div>



    </div>

    <div className='part3' >


</div>

<div className='manu-footer'>    
  <Footer/>
  </div>

    </div>
    

  )
}

export default Manufacturelanding
