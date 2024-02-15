import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
import React from "react";
import SlidingTabs from "./pages/components/SlidingTabs";
import NewsArticleComponent from "./pages/components/NewsArticleContainer";
import Nav from "./pages/components/Nav";


function HomePage() {
  return (
    <div className="App">
    <Nav/>
    <SlidingTabs />
    <NewsArticleComponent />
  </div>
  );
}

export default HomePage;
