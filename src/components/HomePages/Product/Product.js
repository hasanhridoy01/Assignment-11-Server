import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
  //Data Destructing
  const {_id, name, img, description, price, quantity, supplier} = product;
  const navigate = useNavigate();

  //handle Details Pages
  const handleDetails = id => {
    navigate(`/details/${id}`);
  }
  return (
    <div className="g-2 col-sm-12 col-md-6 col-lg-4">
      <div className="phone-details card border-0 p-5 pb-4">
        <img className='mb-0' src={img} alt="" />
        <div className="card-body">
          <div className="details-phone">
            <h5>Product Name: {name}</h5>
            <h6>Supplier Name: {supplier}</h6>
            <h6>Price: $ {price}</h6>
            <h6>Quantity: {quantity}</h6>
            <p>{description}</p>
            <button onClick={() => handleDetails(_id)} className='btn btn-outline-primary ml-0'>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;