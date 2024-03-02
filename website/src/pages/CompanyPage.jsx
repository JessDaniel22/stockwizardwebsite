import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./CompanyPage.css";
import React from "react";
import Nav from "./components/Nav";
import CompanyHeader from "./components/CompanyHeader";
import { useParams } from 'react-router-dom';
import NewsArticleComponent from "./components/NewsArticleContainer";

function CompanyPage() {
  let { companyId } = useParams();
  return (
    <div className="App">
    <Nav/>
    <div className="split-page">
      <div className="data-container">
        <CompanyHeader />
        <div className="graph-container">
          
        </div>
        <div className="news-container">
          <NewsArticleComponent />
          </div>
      </div>

      <div className="company-info">
        <div className="info-container">
          <header>{companyId}</header>
          <p>Company Information</p>
        </div>
      </div>
    </div>
  </div>
  );

}

export default CompanyPage;