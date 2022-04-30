import React from 'react';
import google from '../../../images/google.png';

const SocialLogin = () => {
  return (
    <div>
      <div className='d-flex align-items-center mt-3 mb-2'>
          <div style={{ height: '1px' }} className='bg-primary w-50'></div>
          <p className='mt-2 px-2'>or</p>
          <div style={{ height: '1px' }} className='bg-primary w-50'></div>
      </div>
      <div className=''>
        <button
            // onClick={() => signInWithGoogle()}
            className='btn btn-info w-25 d-block mx-auto my-2'>
            <img style={{ width: '30px' }} src={google} alt="" />
            <span className='px-2 text-white' style={{fontSize: '18px', fontWeight: '600'}}>Google Sign In</span>
        </button>
    </div>
    </div>
  );
};

export default SocialLogin;