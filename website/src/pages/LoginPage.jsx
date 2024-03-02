import "./LoginPage.css";
import React, { useState, useEffect } from "react";
import sendUserDetails from "../sendUserDetails.js";

function LoginPage() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  // const handleLogin = () => {
  //   // Perform login logic here
  //   sendUserDetails(email, password);
  //     useEffect(() => {
  //       const user = localStorage.getItem("user");
  //       if (user) {
  //         const foundUser = JSON.parse(user);
  //         setUser(foundUser);
  //       }
  //     }, []);
  //   console.log("Logging in...");
  // };

  // if (user) {
  //   // TO DO -> route out of login page 
  // }

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
          <button className="login-button">Login</button>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
