import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useProduct from '../../../Hooks/useProduct';

const Products = ({product}) => {
  const navigate = useNavigate();
  const [products, setProducts] = useProduct();
  //Data Destructing
  const {_id, name, img, description, price, quantity, supplier} = product;

  //handle Details Pages
  const handleDetails = id => {
    navigate(`/details/${id}`);
  }

  //handle delete 
  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure?');
    if(proceed){
      const url = `https://cryptic-badlands-81188.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE"
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const remaining = products.filter(product => product.id !== id);
        setProducts(remaining);
        toast('Items Delete Successful');
      })
    }
  }
   return (
    <div className="g-2 col-sm-12 col-md-6 col-lg-4">
      <ToastContainer />
      <div className="phone-details card border-0 p-5 pb-4">
        <img className='mb-0' src={img} alt="" />
        <div className="card-body">
          <div className="details-phone">
            <h5>ProductName: {name}</h5>
            <h6>Supplier: {supplier}</h6>
            <h6>Price: $ {price}</h6>
            <h6>Quantity: {quantity}</h6>
            <p>{description}</p>
            <button onClick={() => handleDetails(_id)} className='btn btn-outline-primary ml-0'>Update</button>
            <button onClick={() => handleDelete(_id)} className='btn btn-outline-danger ml-0 delete'>Delete</button>
          </div>
        </div>
      </div>
    </div>
   );
};

export default Products;