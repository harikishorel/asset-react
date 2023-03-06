import React, { useState ,useEffect} from 'react';
import './Editprod.css';
import axios from './axios';
import './font2.css';
import './Addproduct.css'
import { Dropdown } from 'react-bootstrap';
import Header from './Header';

function Addprod() {

    const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };


    const [products,setProducts] = useState('');

    useEffect(()=> {
        const fetchdata =async ()=> {
            const data =await axios.get('/add')
        setProducts(data)
        
        };
        fetchdata();
    }, [])

 

  return (
    <div>
  <Header />
    <div className='Add-list' style={{ fontFamily: 'Helvetica Now' }}>
      <form className="form-horizontal">
        <legend className='p1' style={{ fontFamily: 'Helvetica Now' }}> ADD PRODUCTS</legend>
        <div className='proform'>
        <Dropdown>
      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
        {selectedProduct ? selectedProduct.productName : 'Select product'}
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        {products &&
          products.data.map((product) => (
            <Dropdown.Item
              active={selectedProduct === product}
              onClick={() => handleSelectProduct(product)}
            >
              {product.productName}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
          <label className='editname'style={{ fontFamily: 'Helvetica Now' }} htmlFor="product_id">SERIAL NUMBER </label>
          <input
            className='p2 form-control input-md'
            id="product_id"
            name="product_id"
            placeholder="Name"
            type="text"
          />

          <div className='add2'>
            <label className='editname' style={{ fontFamily: 'Helvetica Now' }} htmlFor="product_name">MODEL</label>
            <textarea
              className='p2 form-control input-md'
              id="product_name"
              name="product_name"
              placeholder="Description"
              type="text"
              />
          </div>

          <button id="singlebutton"  name="singlebutton" className="add-btn" >Add</button>

        </div>
      </form>
    </div>
    <div className="head2" style={{ fontFamily: "Axiforma" }}>
        Copyright &copy; 2023 | Asset Warrenty
      </div>
    </div>
  )
}

export default Addprod;
