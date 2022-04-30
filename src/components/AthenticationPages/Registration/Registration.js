import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Registration.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  let errorElement;

  //create a new user form Registration
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

  //user profile update
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

  //if email send some error will show 
  if(error || updatingError){
    errorElement = <p style={{color: 'red'}}>{error?.message}</p>;
  }

  //user console.log to confirm registration;
  if(user){
    console.log(user);
  }

  //from submit
  const handleRegister = async(e) => {
    e.preventDefault();
    const displayName = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if(password.length < 6){
      toast('please at list 6 character password');
    }else{
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({displayName});
      toast('Updated profile');
      navigate('/');
    }
  }
  return (
    <div className='container mt-5 mb-5 p-5'>
      <div className="card mx-auto w-50 p-5">
          <h3>Registration</h3>
          <ToastContainer />
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control ref={nameRef} name='name' type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} name='password' type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={() => setAgree(!agree)}  name='terms' id='terms' type="checkbox" label="Accept Terms and Condition" />
              </Form.Group>
              
               {errorElement}

              <p>Already have an account? <Link to='/login' className='loginbtn'>Login</Link></p>
              <button disabled={!agree} className='btn btn-primary'>Registration</button>
          </Form>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Registration;