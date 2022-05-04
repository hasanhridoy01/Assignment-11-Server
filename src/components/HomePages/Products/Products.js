import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({product}) => {
  const navigate = useNavigate();
   //Data Destructing
   const {_id, name, img, description, price, quantity, supplier} = product;

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
            <h5>ProductName: {name}</h5>
            <h6>Supplier: {supplier}</h6>
            <h6>Price: $ {price}</h6>
            <h6>Quantity: {quantity}</h6>
            <p>{description}</p>
            <button onClick={() => handleDetails(_id)} className='btn btn-outline-primary ml-0'>Details</button>
            <button className='btn btn-outline-info update'>Update</button>
          </div>
        </div>
      </div>
    </div>
   );
};

export default Products;