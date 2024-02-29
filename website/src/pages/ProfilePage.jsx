import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import React from "react";
import Nav from "./components/Nav";
import StocksNews from "./components/StocksNews";


function ProfilePage() {
  return (
    <div className="App">
      <Nav />
    <StocksNews />
  </div>
  );
}

export default ProfilePage;