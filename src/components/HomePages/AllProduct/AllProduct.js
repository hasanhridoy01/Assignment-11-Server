import React from 'react';
import useProduct from '../../../Hooks/useProduct';

const AllProduct = () => {
  const [products, setProducts] = useProduct();
  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        {
          products.map(product => Product(product))
        }
      </div>
    </div>
  );
};

const Product = (product) => {
   //Data Destructing
   const {id, name, img, description, price, quantity, supplier} = product;
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
            <button className='btn btn-outline-primary ml-0'>Details</button>
            <button className='btn btn-outline-info update'>Update</button>
          </div>
        </div>
      </div>
    </div>
   );
}

export default AllProduct;