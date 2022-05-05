import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../Hooks/useProductDetails';
import './DetailsPage.css';

const DetailsPage = () => {
  const { detailsId } = useParams();
  const [product] = useProductDetails(detailsId);

  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="card border-0 p-5">
            <h3>Product Name : {product.name}</h3>
            <h6>Supplier Name: {product.supplier}</h6>
            <h6>Price: $ {product.price}</h6>
            <h6>Quantity: {product.quantity}</h6>
            <p>{product.description}</p>
            <button className='btn btn-primary w-25 mb-2'>Deliverd</button>
            <div className="card p-3 shadow">
            <label htmlFor="Quantity">Quantity</label>
            <input type="text" className='form-control mt-2 mb-2 w-50' />
            <button className='btn btn-info w-25'>Add</button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
           <div className="details-img card border-0">
             <img src={product.img} alt="" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;