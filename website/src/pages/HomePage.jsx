import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import React from "react";
import SlidingTabs from "./components/SlidingTabs";
import NewsArticleComponent from "./components/NewsArticleContainer";
import Nav from "./components/Nav";
import { requestArticles } from "../requestArticles"


const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);
let start_time = yesterday.toISOString();
let end_time = today.toISOString();
let use_following_companies = false;
let companies_list = []
// requestArticles(start_time,end_time,true, {});


function HomePage() {
  return (
    <div className="App">
    <Nav/>
    <SlidingTabs />
    <NewsArticleComponent start_time={start_time} end_time={end_time} use_following_companies={use_following_companies}  companies_list={companies_list}/>
  </div>
  );
}

export default HomePage;