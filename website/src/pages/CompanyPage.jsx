import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./CompanyPage.css";
import React, { useEffect, useState }from "react";
import Nav from "./components/Nav";
import CompanyHeader from "./components/CompanyHeader";
import { useParams } from 'react-router-dom';
import NewsArticleComponent from "./components/NewsArticleContainer";
import { useCompanies } from "../api/CompaniesContext";
import { getCompanyData } from "../getCompanyData";
import { useLocation } from "react-router-dom";
import LineChart  from "./components/lineChart"

const CompanyPage = () => {
  let { companyId } = useParams();
  const parsedCompanyId = parseInt(companyId, 10);
  const { companies, toggleFollow } = useCompanies();
  const company = companies.find((company) => company.id === parsedCompanyId);

  const isFollowing = company ? company.isFollowing : false;
  const ticker = useLocation().pathname.split("/")[2];
   
  // let temp = getCompanyData(ticker)
  const [companyData, setCompanyData] = useState(null);
  console.log("after use state")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCompanyData(ticker);
        // Assuming data.data contains the array of company recommendations
        setCompanyData(data);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount


  if (!companyData){
    return null;
  }

  console.log(companyData, "companydata")
  let graphData = companyData.graph_data;
  console.log("Graph data", graphData)
  let dates = Object.keys(graphData);
  let vals = [];
  for (let i=0; i < dates.length; i++) {
    vals.push(dates[i]);
  }


  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 7);
  let start_time = yesterday.toISOString();
  let end_time = today.toISOString();
  let use_following_companies = false;
  let companies_list = [ticker]
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
          <NewsArticleComponent start_time={start_time} end_time = {end_time} use_following_companies = {use_following_companies}  companies_list = {companies_list}/>
          </div>
      </div>

      <div className="company-info">
        <div className="info-container">
          <header>{companyData.company_name}</header>
          <p>Company Information</p>
          <p>Ticker: { companyData.ticker }</p>
          <p>Description: { companyData.description }</p>
          <p>Industry: { companyData.industry }</p>
          <p>Location: { companyData.location }</p>
          <p>Price-earnings ratio: { companyData.pe_ratio }</p>
          <p>Weighted mean sentiment (1 day): {companyData.wms_1d} </p>
          <p>Weighted mean sentiment (3 day): {companyData.wms_3d} </p>
          <p>Weighted mean sentiment (1 week): {companyData.wms_7d} </p>
        </div>
      </div>
    </div>
  </div>
  );

}

export default CompanyPage;