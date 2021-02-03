import React from "react";
import { signInWithGoogle } from "../firebase/firebase.utils";

import "./signin.styles.scss";

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-content">
        <h1>Email</h1>
        <input className="email" type="email" />
        <h1>Password</h1>
        <input className="password" type="password" />
        <button className="google-btn" onClick={signInWithGoogle}>
          Sign In with google
        </button>
        <button className="custm-btn">Sign in</button>
      </div>
    </div>
  );
};

export default SignIn;
