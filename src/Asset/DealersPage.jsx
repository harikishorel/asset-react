import React, { useEffect ,useState} from 'react'
import axios from './axios';
import Editprod from './Editprod';
import { Modal, ModalBody,ModalTitle,ModalHeader } from 'react-bootstrap';


import "./DealersPage.css";

function DealersPage() {
  
  const [showEditProd, setShowEditProd] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const [products,setProducts] = useState('');

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowEditProd(true);
  }

    useEffect(()=> {
        const fetchdata =async ()=> {
            const data =await axios.get('/editproduct')
        setProducts(data)
        
        };
        fetchdata();
    }, [])
  return (
    <div>

      <br />
      <div className="boxcont2">
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>Product</th>
                
                <th>Status</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {
                products && products.data.map((product)=>(
                  <tr>
                  <td>{product.productName}</td>
                  <td>{product.status ? "Active" : "Inactive"}</td>
                    <button onClick={() => handleEdit(product)}>Edit</button>
                </tr>
                ))
              }
             
             
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={showEditProd} onHide={() => setShowEditProd(false)}>
      <ModalHeader closeButton>
        <ModalTitle>Edit Product</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Editprod product={selectedProduct} onClose={() => setShowEditProd(false)} />
      </ModalBody>
    </Modal>      
    </div>
  );
}

export default DealersPage;
