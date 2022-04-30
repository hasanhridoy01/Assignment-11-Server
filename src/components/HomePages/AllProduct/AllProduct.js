import React from 'react';
import useProduct from '../../../Hooks/useProduct';
import Products from '../Products/Products';

const AllProduct = () => {
  const [products, setProducts] = useProduct();
  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        {
          products.map(product => <Products key={product.id} product={product}></Products>)
        }
      </div>
    </div>
  );
};

export default AllProduct;