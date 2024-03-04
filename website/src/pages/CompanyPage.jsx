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
import { useCompanies } from "../api/CompaniesContext";

const CompanyPage = () => {
  let { companyId } = useParams();
  const parsedCompanyId = parseInt(companyId, 10);
  const { companies, toggleFollow } = useCompanies();
  const company = companies.find((company) => company.id === parsedCompanyId);

  const isFollowing = company ? company.isFollowing : false;
  return (
    <div className="App">
    <Nav/>
    <div className="split-page">
      <div className="data-container">
      <div className="company-header">
      <header className="company-title">{company.name}</header>
      <p className="company-logo">Logo</p> 
      <button className="follow-button" onClick={()=>toggleFollow(parsedCompanyId)}>
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
        <div className="graph-container">
          
        </div>
        <div className="news-container">
          <NewsArticleComponent companyId={parsedCompanyId} />
          </div>
      </div>

      <div className="company-info">
        <div className="info-container">
          <header>{company.name}</header>
          <p>Company Information</p>
        </div>
      </div>
    </div>
  </div>
  );

}

export default CompanyPage;