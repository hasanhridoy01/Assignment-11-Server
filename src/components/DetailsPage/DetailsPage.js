import React from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useProductDetails from '../../Hooks/useProductDetails';
import './DetailsPage.css';

const DetailsPage = () => {
  const { detailsId } = useParams();
  const [product, setProduct] = useProductDetails(detailsId);

  let productQuantity = product.quantity;


  //handle Delivered items
  const handleDelivered = e => {
    // e.preventDefault();
    
    if (productQuantity === 0) {
      productQuantity = 0;
    } else {
      let quantity = productQuantity--;

      let apiQuantity = {quantity}

      //fetch 
      const url = `http://localhost:5000/quantityminus/${detailsId}`;
      fetch(url, {
        method: "put",
        headers: {
         'content-type': 'application/json'
        },
        body: JSON.stringify(apiQuantity)
      })
      .then(response => response.json())
      .then(data => {
        toast('Items Delivered Please Reload');
      })
    }
  }

  //handle Quantity update
  const handleQuantityUpdate = e => {
    e.preventDefault();
    
    //received form value
    const quantity = e.target.quantity.value;

    const QuantityUpdated = {quantity};
    
     //fetch 
     const url = `http://localhost:5000/quantity/${detailsId}`;
     fetch(url, {
       method: "put",
       headers: {
        'content-type': 'application/json'
       },
       body: JSON.stringify(QuantityUpdated)
     })
     .then(response => response.json())
     .then(data => {
      e.target.reset();
       toast('quantity Updated successful');
     })
  }

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
            <button onClick={handleDelivered} className='btn btn-primary w-25 mb-2'>Delivered</button>
            <ToastContainer />
            <div className="card p-3 shadow">
              <form onSubmit={handleQuantityUpdate}>
                <label htmlFor="Quantity">Quantity</label>
                <input name='quantity' type="text" className='form-control mt-2 mb-2 w-50' />
                <button className='btn btn-info w-25'>Update</button>
              </form>
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