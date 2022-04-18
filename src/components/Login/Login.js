import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import Loading from "../Loading/Loading";




const Login = () => {
    const navigate = useNavigate()
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const location = useLocation()
    const emailRef = useRef("");
    const passwordRef = useRef("");
    let errorElement;

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    let from = location?.state?.from?.pathname || "/";

    if(loading || loading1){
       <Loading></Loading>
    }

    if(user || user1){
      navigate(from, {replace: true})
  }





      if (error || error1) {
        errorElement = <p className="text-danger">Error: {error?.message} {error1?.message}</p>

  }



    const handleLogin = async event => {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;


      await   signInWithEmailAndPassword(email, password)
      
  }

  const setPassword = async ()  => {
    const email = emailRef.current.value;
      await sendPasswordResetEmail(email, sending);
      if(email){
        toast("mail has been sent !");
      }
      else toast("Please enter your email address")
  }



  return (
    <div className="container">
      <div className="d-flex flex-column flex-lg-row">
        <div className="img-holder-login"></div>
        <div className="text d-flex justify-content-center align-items-center">
          <div className="w-75">
            <form onSubmit={handleLogin}>
              <input
                ref={emailRef}
                className="d-block w-75 mx-auto p-2 mb-3"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <input
                ref={passwordRef}
                className="d-block w-75 mx-auto p-2 mb-3"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
              {errorElement}
              <input
                className="btn1 d-block w-75 mx-auto"
                type="submit"
                value="Login"
              />
            </form>
            <p className="w-75 mx-auto">Forgot password? <span onClick={setPassword} className=" pointer">Send Email</span></p>
            <ToastContainer/>
            <p className="w-75 mx-auto">New Here? <span className=" pointer" onClick={()=>navigate("/signup")}>Please Register</span></p>
            <button onClick={()=>signInWithGoogle()} className="w-75 mx-auto btn1 d-block"><span className="me-2"><FaGoogle></FaGoogle></span> Google Login</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
