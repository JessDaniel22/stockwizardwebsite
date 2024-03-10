import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./NewsArticleContainer.css";
import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { useCompanies } from "../../api/CompaniesContext";
import moment from 'moment';


const NewsArticleComponent = ({start_time, end_time, use_following_companies, companies_list}) => {
  const { companies, toggleFollow } = useCompanies();
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    const url = 'wss://cs261se.containers.uwcs.co.uk';
    const login_request = {
      "type": "LOGIN_REQUEST",
      "data": {
        "user": localStorage.getItem('user'),
        "token": localStorage.getItem('token')
      }
    };

    const article_request = {"type": "ARTICLE_REQUEST", "data": {
      "start_time": start_time,
      "end_time": end_time,
      "use_following_companies": use_following_companies,
      "companies": companies_list
    }};
    
    const socket = new WebSocket(url);
    socket.onopen = () => {
      console.log('Connection opened');
      socket.send(JSON.stringify(login_request));
      socket.send(JSON.stringify(article_request));
    };
    
    socket.onmessage = (event) => {
      const eventData = JSON.parse(event.data);
      if (eventData.type === "ARTICLE_RESPONSE" ) { 
        setArticleList(cleanData(eventData.data)); 
      }
    };

    socket.onclose = () => {
      console.log('Server closed connection');
    };

    socket.onerror = () => {
      console.log('WebSocket error');
    };

    return () => {
      socket.close();
    }

  }, []); 

  function cleanData(data) {
    let cleaned = [];
    for (let i = 0; i < data.articles.length; i++) {
      let article = data.articles[i];
      let temp = {};
      temp["title"] = article.title;
      temp["summary"] = article.summary;
      temp["url"] = article.url;
      temp["time_published"] = moment().subtract(article.time_published, 'day').format("Do MMMM,YYYY"); 
      
      let tempCompanies = [];
      for (let t = 0; t < article.ticker_info.length; t++) {
        let tempCompany = {};
        let ticker = article.ticker_info[t].ticker;
        tempCompany["name"] = data.companies[ticker].company_name;
        tempCompany["ticker"] = ticker;
        tempCompany["id"] = t;
        tempCompany["score"] = article.ticker_info[t].sentiment;
        tempCompany["prediction"] = article.ticker_info[t].prediction_string;
        tempCompanies.push(tempCompany);
      }
      temp["companies"] = tempCompanies; 
      cleaned.push(temp);
    }

    return cleaned.map(article => ({
      title: article.title,
      summary: article.summary,
      url: article.url,
      timepublished: article.time_published,
      companies: article.companies
    }));
  }

 
  const html_articles = [];
  for (let i = 0; i < articleList.length; i++) {
    html_articles.push(<Cards
      articleData={articleList[i]}
      toggleFollow={toggleFollow}
      companies={companies}
    />);
  }
  
  return (
    <div className="cards-container">
      {html_articles}
    </div>
  );
};

export default NewsArticleComponent;
