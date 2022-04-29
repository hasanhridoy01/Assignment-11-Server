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
            products.map(product => <Product key={product.id} product={product}></Product>)
          }
        </div>
        <Display></Display>
      </div>
    </div>
  );
};

export default Home;