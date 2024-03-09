import "./LoginPage.css";
import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { sendUserDetails } from "../sendUserDetails.js";

function LoginPage() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path); // Navigate to the specified path
  };


  const handleSubmit = async e => {
    e.preventDefault();
    // sendUserDetails(email,password);
    let success = await sendUserDetails(email,password);
    if (success) {
      navigateToPage('/')
    }
  };

    // useEffect(() => {
    //   const handleSubmit = async e => {
    //     try {
    //       await sendUserDetails(email,password);
    //       const user_token = localStorage.getItem("user_token") || "undefined";
    //       console.log('oken', user_token, user_token === "undefined")

    //       if (user_token !== "undefined") {
    //         console.log("aaa oken aaaa")
    //         navigateToPage('/')
    // }

    //     } catch (error) {
    //       console.error('An error occurred:', error);
    //     }
    //   };
    //   fetchData();
    // }, []); // Empty dependency array ensures the effect runs only once on component mount
  

  return (
    <div className="split-page1">
      <div className="image-container">
      </div>
      <div className="login-details">
        <div className="form-containerL">
          <h1>Welcome back,</h1>
          <label htmlFor="emailAddress">Email address</label>
          <input
            type="text"
            placeholder="Email address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleSubmit}>Login</button>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
