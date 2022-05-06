import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './MyItems.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const email = user?.email;
    const url = `http://localhost:5000/items?email=${email}`;
    fetch(url)
    .then(response => response.json())
    .then(data => setProducts(data));
  },[]);

  return (
    <div className='container mt-5 mb-5'>
      <h3>My Items</h3>
      <div className="card p-5">
      <a className='btn btn-outline-danger w-25 mt-3 mb-3' href='/addproduct'>Add New Items</a>
      {
        products.map(product => displayItems(product))
      }
      </div>
    </div>
  );
};
const displayItems = items => {
  //Data Destructing
  const {_id, name, email, img, description, price, quantity, supplier} = items;

  //handle update
  // const handleUpdate = id => {
  //   navigate();
  // }

  //handle delete 
  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure?');
    if(proceed){
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE"
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // const remaining = items.filter(items => items.id !== id);
        // setProducts(remaining);
        toast('Items Delete Successful');
      })
    }
  }
  return (
    <div className="">
      <ToastContainer />
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Items Name</th>
              <th>User Email</th>
              <th>Supplier Name</th>
              <th>Product price</th>
              <th>Product quantity</th>
              <th>Product Photo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{_id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{supplier}</td>
              <td>$ {price}</td>
              <td>{quantity}</td>
              <td>
                <img className='img-phone-items' src={img} alt="" />
              </td>
              <td>
                  <div className="btn">
                    <a className="btn btn-sm btn-warning" href={`/updateproduct/${_id}`}>Edit</a>
                    <br />
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-danger delete-btn">Delete</button>
                  </div>
                </td>
            </tr>
          </tbody>
        </Table>
    </div>
  );
}

export default MyItems;