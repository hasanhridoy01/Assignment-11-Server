import React from 'react';
import Display from '../Display/Display';
import Specification from '../Specification/Specification';
import useProduct from '../../../Hooks/useProduct';
import Product from '../Product/Product';

const Home = () => {
  const [products, setProdcuts] = useProduct();
  return (
    <div className='container mt-5 mb-5 p-2'>
      <div className="row">
        <Specification></Specification>
        <div className="row">
          {
            products.slice(0, 6).map(product => <Product key={product.id} product={product}></Product>)
          }
        </div>
        <a className='btn btn-info w-25 mt-5 mb-3 d-block mx-auto' href='/allproduct'>See all Product</a>
        <Display></Display>
      </div>
    </div>
  );
};

export default Home;