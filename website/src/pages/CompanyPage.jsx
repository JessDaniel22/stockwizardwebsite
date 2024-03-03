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
import LineChart from "./components/lineChart";

function CompanyPage() {
  let { companyId } = useParams();
  const labels = ["temp", "temp", "temp"];
  const data = [1, 2, 3];
  return (
    <div className="App">
    <Nav/>
    <div className="split-page">
      <div className="data-container">
        <CompanyHeader />
        <div className="graph-container">

          <LineChart labels={labels} data={data} />
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