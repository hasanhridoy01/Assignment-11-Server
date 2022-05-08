import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import './AddProduct.css';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  //form submit
  const handleFormSubmit = e => {
    e.preventDefault();

    //received all info
    const name = e.target.name.value;
    const supplier = e.target.supplier.value;
    const price = e.target.price.value;
    const img = e.target.photo.value;
    const quantity = e.target.quantity.value;
    const email = e.target.email.value;
    const description = e.target.description.value;

    const items = {name, description, price, email, quantity, supplier, img};
    
    //fetch 
    fetch('  https://murmuring-crag-30634.herokuapp.com/product', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(items)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      toast('items added successful');
      e.target.reset();
      navigate('/allproduct');
    })
  }
  return (
    <div className='container mt-5 mb-5 p-5'>
      <div className="card p-5 w-50 mx-auto shadow">
       <h3>Add New Product</h3>
       <ToastContainer />
        <Form onSubmit={handleFormSubmit}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control autoComplete='off' name='name' type="text" placeholder="Enter Product Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Email</Form.Label>
            <Form.Control name='email' value={user.email} readOnly disabled type="text" placeholder="Enter Supplier Name" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Supplier Name</Form.Label>
            <Form.Control autoComplete='off' name='supplier' type="text" placeholder="Enter Supplier Name" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Price</Form.Label>
            <Form.Control autoComplete='off' name='price' type="text" placeholder="Enter Product Price" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Photo</Form.Label>
            <Form.Control autoComplete='off' name='photo' type="text" placeholder="Enter Product Photo URl" />
          </Form.Group>

          {/* <div className="card w-50 p-2 border-0">
            <label htmlFor="">Quantity</label>
            <input onClick={remove} type="button" value="-" id="subs" className="btn btn-default pull-left mb-2 mt-2 w-25"/>
            <Form.Control id='input' ref={valueRef} type="text" className='w-50' value='0' />
            <input onClick={add} type="button" value="+" id="adds" className="btn btn-default mt-2 mb-2 w-25" />
          </div> */}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product quantity</Form.Label>
            <Form.Control autoComplete='off' name='quantity' type="text" placeholder="Enter Product Photo URl" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Description</Form.Label>
            <textarea name='description' className='form-control' type="text" placeholder="Enter Product Description" />
          </Form.Group>

          <Button variant="primary" type="Add">
            Add
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;