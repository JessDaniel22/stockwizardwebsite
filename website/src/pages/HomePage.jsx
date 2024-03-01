import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import React from "react";
import SlidingTabs from "./components/SlidingTabs";
import NewsArticleComponent from "./components/NewsArticleContainer";
import Nav from "./components/Nav";


function HomePage() {
  return (
    <div className="App">
    <Nav/>
    <SlidingTabs />
    <NewsArticleComponent/>
  </div>
  );
}

export default HomePage;