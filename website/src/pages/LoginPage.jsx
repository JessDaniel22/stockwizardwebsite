import "./LoginPage.css";
import { sendUserDetails } from "./sendUserDetails.js";
import React, { useState } from "react";

function LoginPage() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    sendUserDetails();
    console.log("Logging in...");
  };

  return (
    <div className="split-page">
      <div className="image-container">
      </div>
      <div className="login-details">
        <div className="form-container">
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
          <button onClick={handleLogin} className="login-button">Login</button>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
