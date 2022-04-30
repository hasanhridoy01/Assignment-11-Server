import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png';
import Loading from '../../../components/Loading/Loading'

const SocialLogin = () => {
  const navigate = useNavigate();

  //Sign In With Google
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let errorElement;

    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate('/home');
    }
    
  return (
    <div>
      <div className='d-flex align-items-center mt-3 mb-2'>
          <div style={{ height: '1px' }} className='bg-primary w-50'></div>
          <p className='mt-2 px-2'>or</p>
          <div style={{ height: '1px' }} className='bg-primary w-50'></div>
      </div>
      {errorElement}
      <div className=''>
        <button
            onClick={() => signInWithGoogle()}
            className='btn btn-info w-25 d-block mx-auto my-2'>
            <img style={{ width: '30px' }} src={google} alt="" />
            <span className='px-2 text-white' style={{fontSize: '18px', fontWeight: '600'}}>Google Sign In</span>
        </button>
    </div>
    </div>
  );
};

export default SocialLogin;