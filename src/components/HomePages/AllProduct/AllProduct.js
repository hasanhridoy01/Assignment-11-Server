import React from 'react';
import useProduct from '../../../Hooks/useProduct';
import Products from '../Products/Products';

const AllProduct = () => {
  const [products, setProducts] = useProduct();
  return (
    <div className='container mt-5 mb-5'>
      <a className='btn btn-outline-info mt-3 mb-3' href='/addproduct'>Add New Items</a>
      <div className="row">
        {
          products.map(product => <Products key={product.id} product={product}></Products>)
        }
      </div>
    </div>
  );
};

export default AllProduct;