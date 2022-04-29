import React from 'react';
import Display from '../Display/Display';
import Specification from '../Specification/Specification';

const Home = () => {
  return (
    <div className='container mt-5 mb-5 p-2'>
      <div className="row">
        <Specification></Specification>
        <Display></Display>
      </div>
    </div>
  );
};

export default Home;