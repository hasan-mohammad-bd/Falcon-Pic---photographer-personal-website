import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import {
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";

const Signup = () => {
  const navigate = useNavigate();
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  let errorElement;
  console.log(errorElement);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

  if (user || user1) {
    console.log(user);
    navigate("/");
  }

  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

  const setPassword = async () => {
    const email = emailRef.current.value;
    console.log(email);
    await sendPasswordResetEmail(email, sending);
    if (email) {
      toast("mail has been sent !");
    } else toast("Please enter your email address");
  };

  return (
    <div className="container">
      <div className="d-flex flex-column flex-lg-row">
        <div className="img-holder-login"></div>
        <div className="text d-flex justify-content-center align-items-center">
          <div className="w-75">
            <form onSubmit={handleSignUp}>
              <input
                ref={nameRef}
                className="d-block w-75 mx-auto p-2 mb-3"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
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
                value="Sign Up"
              />
            </form>
            <p className="w-75 mx-auto">
              Forgot password?{" "}
              <span onClick={setPassword} className=" pointer">
                Send Email
              </span>
            </p>
            <p className="w-75 mx-auto">Have an account? <span className=" pointer" onClick={()=>navigate("/login")}>Please Login</span></p>
            <ToastContainer />
            <button
              onClick={() => signInWithGoogle()}
              className="w-75 mx-auto btn1 d-block"
            >
              <span className="me-2">
                <FaGoogle></FaGoogle>
              </span>{" "}
              Google Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
