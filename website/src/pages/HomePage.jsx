import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./HomePage.css";
import React from "react";
import SlidingTabs from "./components/SlidingTabs";
import NewsArticleComponent from "./components/NewsArticleContainer";
import Nav from "./components/Nav";

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);
let start_time = yesterday.toISOString();
let end_time = today.toISOString();
let use_following_companies = false;
let companies_list = []


function HomePage() {
  return (
    <div className="App page-content">
    <Nav/>
    <SlidingTabs />
    <NewsArticleComponent start_time={start_time} end_time={end_time} use_following_companies={use_following_companies}  companies_list={companies_list}/>
  </div>
  );
}

export default HomePage;