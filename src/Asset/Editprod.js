import React, { useState } from 'react';
import './Addproduct.css';
import axios from './axios';
import './font.css';
import { Modal, ModalBody,ModalTitle,ModalHeader } from 'react-bootstrap';

function Editprod({ product, show, onClose }) {
  const [productName, setProductName] = useState(product.productName);
  const [productDes, setProductDes] = useState(product.productDes);

  const handleSave = async () => {
    try {
      await axios.put(`/editProduct/${product._id}`, {
        productName,
        productDes,
      });
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <ModalHeader closeButton>
        <ModalTitle>Edit PRODUCT</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <form className="form-horizontal">
          <div className='proform'>
            <label className='p1 col-md-4 control-label' htmlFor="product_id">PRODUCT NAME </label>
            <input
              className='p2 form-control input-md'
              id="product_id"
              name="product_id"
              placeholder="Name"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />

            <div className='add2'>
              <label className='p1 col-md-4 control-label' htmlFor="product_name">PRODUCT DESCRIPTION</label>
              <textarea
                className='p2 form-control input-md'
                id="product_name"
                name="product_name"
                placeholder="Description"
                type="textarea"
                value={productDes}
                onChange={(e) => setProductDes(e.target.value)}
              />
            </div>

            <button id="singlebutton" name="singlebutton" className="add-btn" onClick={handleSave}>Save</button>
            <button id="singlebutton" name="singlebutton" className="add-btn" onClick={onClose}>Close</button>

          </div>
        </form>
      </ModalBody>
    </Modal>
  )
}

export default Editprod;
