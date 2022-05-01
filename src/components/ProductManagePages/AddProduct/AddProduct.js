import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddProduct.css';

const AddProduct = () => {
  const valueRef = useRef(0);

  //add quantity
  const add = e => {
    e.preventDefault();
    const input = document.getElementById('#input');
    // const value = valueRef.current.value;
    alert(input.val());
  }
  
  //remove quantity
  const remove = e => {
    e.preventDefault();
    const value = valueRef.current.value;
    alert(value);
  }
  return (
    <div className='container mt-5 mb-5 p-5'>
      <div className="card p-5 w-50 mx-auto shadow">
       <h3>Add New Product</h3>
        <Form>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Product Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Supplier Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Supplier Name" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="text" placeholder="Enter Product Price" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Photo</Form.Label>
            <Form.Control type="text" placeholder="Enter Product Photo URl" />
          </Form.Group>

          <div className="card w-50 p-2 border-0">
            <label htmlFor="">Quantity</label>
            <input onClick={remove} type="button" value="-" id="subs" className="btn btn-default pull-left mb-2 mt-2 w-25"/>
            <Form.Control id='input' ref={valueRef} type="text" className='w-50' value='0' />
            <input onClick={add} type="button" value="+" id="adds" className="btn btn-default mt-2 mb-2 w-25" />
          </div>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Description</Form.Label>
            <textarea className='form-control' type="text" placeholder="Enter Product Description" />
          </Form.Group>

          <Button variant="primary" type="Add">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;