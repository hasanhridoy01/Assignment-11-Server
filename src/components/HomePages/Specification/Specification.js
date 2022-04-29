import React from 'react';
import './Specification.css';
import images1 from '../../../images/spacifacation/ic11.webp';
import images2 from '../../../images/spacifacation/ic12.webp';
import images3 from '../../../images/spacifacation/ic13.webp';

const Specification = () => {
  return (
    <div className='container-side mt-5 mb-5 specification'>
      <div className="row g-0">
        <h2>WHAT MAKES THE ESSENTIAL DIFFERENT?</h2>
        <p className='mb-4'>EXPERIENCE HIGH PERFORMANCE AND SECURE</p>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card p-5 border-0">
            <img className='img' src={images3} alt="" />
            <div className="card-body">
              <h5>PERFECT CUT</h5>
              <h4>DUAL CAMERA</h4>
              <p>Tristique senectus et netus et malesuada ant reiet fames.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card p-5 border-0">
            <img className='img' src={images2} alt="" />
            <div className="card-body">
              <h5>PRETTY</h5>
              <h4>INTELLIGENT PROCESSING</h4>
              <p>Tristique senectus et netus et malesuada ant reiet fames.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card p-5 border-0">
            <img className='img' src={images1} alt="" />
            <div className="card-body">
              <h5>MOST POPULAR</h5>
              <h4>8GB DDR5 RAM</h4>
              <p>Tristique senectus et netus et malesuada ant reiet fames.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specification;