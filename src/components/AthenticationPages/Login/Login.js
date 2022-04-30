import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.from?.pathname || '/';
  let errorElement;

  //Login 
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  //Reset Password
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
    auth
  );

  //if find error
  if(error || resetError){
    errorElement = <p style={{color: 'red'}}>{error?.message}</p>;
  }

  //if user login
  if(user){
    navigate (form,{replace: true});
  }

  //form submit
  const handleLoginFrom = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }

  //user Reset password
  const resetPassword = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if(email){
      sendPasswordResetEmail(email);
      toast('send email');
    }else{
      toast('Please enter your email address');
    }
  }

  return (
    <div className='container mt-5 mb-5 p-5'>
      <div className="card w-50 mx-auto p-5">
        <h3>Login</h3>
        <ToastContainer />
        <Form onSubmit={handleLoginFrom}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} name='password' type="password" placeholder="Password" />
          </Form.Group>

          <p className='mb-0 mt-1'>New Form Onion Site? <Link to='/registration' className='register'>Registration</Link></p>
          <p className='mb-3 mt-1'>Unknown Your Password? <Link onClick={resetPassword} to='' className='register'>Forget Password</Link></p>
          {errorElement}
          <button className='btn btn-info'>Login</button>
        </Form>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;