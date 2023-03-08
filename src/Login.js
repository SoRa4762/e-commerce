import React, { useState } from "react";
import "./Login.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    // you can add backend from here i think??
  };

  return (
    <div className="login">
      <Link to="/">
        <img src={logo} alt="" className="login__logo" />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign-In
          </button>
        </form>

        <p>
          By signing-in you agree to Walgreens's Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton">
          Create your Walgreen's Account
        </button>
      </div>
    </div>
  );
}

export default Login;
