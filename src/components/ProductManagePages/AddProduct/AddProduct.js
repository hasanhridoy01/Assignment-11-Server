import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddProduct = () => {
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
            <Form.Label>Product Description</Form.Label>
            <textarea className='form-control' type="text" placeholder="Enter Product Description" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;