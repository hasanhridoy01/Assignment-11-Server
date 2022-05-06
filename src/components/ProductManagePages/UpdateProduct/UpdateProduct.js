import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UpdateProduct = () => {
  const {updateid} = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${updateid}`;
    fetch(url)
    .then(response => response.json())
    .then(data => setProduct(data));
  },[updateid]);

  //form submit
  const handleFormUpdate = e => {
    e.preventDefault();

    //received all info
    const name = e.target.name.value;
    const supplier = e.target.supplier.value;
    const price = e.target.price.value;
    const img = e.target.photo.value;
    const quantity = e.target.quantity.value;
    const email = e.target.email.value;
    const description = e.target.description.value;

    const Updateditems = {name, description, price, email, quantity, supplier, img};

    //fetch 
    const url = `http://localhost:5000/update/${updateid}`;
    fetch(url, {
      method: "put",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(Updateditems)
    })
    .then(response => response.json())
    .then(data => {
      toast('items Updated successful');
    })
  }

  return (
    <div className='container mt-5 mb-5 p-5'>
      <div className="card p-5 w-50 mx-auto shadow">
       <h3>Update Product</h3>
       <ToastContainer />
        <Form onSubmit={handleFormUpdate}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name: {product.name}</Form.Label>
            <Form.Control name='name' type="text" placeholder="Enter Product Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Email</Form.Label>
            <Form.Control name='email' value={product.email} readOnly disabled type="text" placeholder="Enter Supplier Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Supplier Name: {product.supplier}</Form.Label>
            <Form.Control name='supplier' type="text" placeholder="Enter Supplier Name" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Price: {product.price}</Form.Label>
            <Form.Control name='price' type="text" placeholder="Enter Product Price" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Photo: {product.img}</Form.Label>
            <Form.Control name='photo' type="text" placeholder="Enter Product Photo URl" />
          </Form.Group>

          {/* <div className="card w-50 p-2 border-0">
            <label htmlFor="">Quantity</label>
            <input onClick={remove} type="button" value="-" id="subs" className="btn btn-default pull-left mb-2 mt-2 w-25"/>
            <Form.Control id='input' ref={valueRef} type="text" className='w-50' value='0' />
            <input onClick={add} type="button" value="+" id="adds" className="btn btn-default mt-2 mb-2 w-25" />
          </div> */}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product quantity: {product.quantity}</Form.Label>
            <Form.Control autoComplete='off' name='quantity' type="text" placeholder="Enter Product Photo URl" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Description: {product.description}</Form.Label>
            <textarea name='description' className='form-control' type="text" placeholder="Enter Product Description" />
          </Form.Group>

          <Button variant="primary" type="Update">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UpdateProduct;