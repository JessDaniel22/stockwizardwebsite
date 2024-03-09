import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./CompanyPage.css";
import Nav from "./components/Nav";
import CompanyHeader from "./components/CompanyHeader";
import { useParams, useLocation } from 'react-router-dom';
import NewsArticleComponent from "./components/NewsArticleContainer";
import { useCompanies } from "../api/CompaniesContext";
import { getCompanyData } from "../getCompanyData";
import { LineChart } from "./components/lineChart"
import { React, useState, useEffect } from "react";


const CompanyPage = () => { 
  let { companyId } = useParams();
  const parsedCompanyId = parseInt(companyId, 10);
  const { companies, toggleFollow } = useCompanies();
  const company = companies.find((company) => company.id === parsedCompanyId);

  const isFollowing = company ? company.isFollowing : false;
   
  const location = useLocation();
  const ticker = location.pathname.split("/")[2];

  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    getCompanyData(ticker).then(data => {
      setCompanyData(data);
    }).catch(error => {
      console.error('An error occurred:', error);
    });
  }, [ticker]);

  if (!companyData) {
    return <div>Loading...</div>;
  }

  let graphData = companyData.graph_data.weekly_time_series;
  let dates = Object.keys(graphData);
  let vals = [];
  for (let i=0; i < dates.length; i++) {
    vals.push(graphData.dates[i]);
  }

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  let start_time = yesterday.toISOString();
  let end_time = today.toISOString();



  return (
    <div className="App">
      <Nav/>
      <div className="split-page">
        <div className="data-container">
          <div className="company-header">
            <header className="company-title">{companyData.company_name}</header>
            <p className="company-logo">Logo</p> 
            <button className="follow-button" onClick={()=>toggleFollow(parsedCompanyId)}>
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
          <div className="graph-container">
            <LineChart labels={dates} data={vals} companyName={companyData.company_name}/>
          </div>
          <div className="news-container">
            <NewsArticleComponent start_time={start_time} end_time = {end_time} use_following_companies = {false}  companies_list = {ticker}/>
          </div>
        </div>

        <div className="company-info">
          <div className="info-container">
            <header>{companyData.company_name}</header>
            <p>Company Information</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyPage;
