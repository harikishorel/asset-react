import React,{useState} from 'react'
import Topbar from '../Repeated/Topbar';
import Form from 'react-bootstrap/Form';
import CreateStock from './CreateStock';
import './Stock.css'

function Stock () {
    const[show,onHide]=useState(false);

    const handleOpenModal=()=>{
        onHide(true);
    };
    const handleCloseModal=()=>{
        onHide(false);
    };
  return (
    <div>
        <Topbar />
        <br />
        <br />
        <div className='asd'>
        <div className='d0d2'>
        <Form.Select aria-label="Default select example">
            <option>select Model</option>
            <option value="1">Tv</option>
            <option value="2">Watch</option>
            <option value="3">Phone</option>
            </Form.Select>
         </div>
         <br />
         <br />
         <div className="search-container" style={{ margin:'0px 0px 0px 150px ', backgroundColor:'white', boxshadow: '0 24px 64px #26214a1a', borderradius: '12px'}}>
      <form class="search" action="">
        <input
          class="search-input"
          type="search"
          placeholder="Search here..."
          required
        />
        <button className="search-btn" type="submit">
          Search Product
        </button>
      </form>
    </div>

 <div className='popbtn'>
        <button className='btn2' style={{ backgroundColor: 'BLUE', margin:'0px 0px 0px 100px ' }} onClick={handleOpenModal}> Add stock</button>
      <CreateStock show={show} onHide={handleCloseModal}/>
    </div>
    </div>





    
    </div>
    
  )  
}

export default Stock;
