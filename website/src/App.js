import "./App.css";
import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    console.log("Logging in...");
  };

  return (
    <div className="split-page">
      <div className="image-container">
        <h1>fill with image</h1>
      </div>
      <div className="login-details">
        <div className="form-container">
          <h1>Login Page</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
