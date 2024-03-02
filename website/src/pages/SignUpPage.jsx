import "./SignUpPage.css";
import React, { useState } from "react";

function SignUpPage() {
  const [Text, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmedPassword] = useState("");

  const handleRegister = () => {
    // Perform register logic here
    console.log("registering...");
  };

  return (
    <div className="split-pageS">
      <div className="image-container">
      </div>
      <div className="register-details">
        <div className="form-containerS">
          <h1>Create an account</h1>
          <label htmlFor="FullName">Full name</label>
          <input
            type="text"
            placeholder="Full name"
            value={Text}
            onChange={(e) => setname(e.target.value)}
          />
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
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
          />
          <button onClick={handleRegister} className="register-button">Register</button>
          <p className="login-link">
            Already have an account? <a href="/login"> Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
