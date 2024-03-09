import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { useCompanies } from "../../api/CompaniesContext";
import moment from 'moment';

const NewsArticleComponent = ({start_time, end_time, use_following_companies, companies_list}) => {
  const { companies, toggleFollow } = useCompanies();
  const [articleList, setArticleList] = useState([]);


  useEffect(() => {
    const url = 'wss://cs261se.containers.uwcs.co.uk';
    console.log("................................")

    const login_request = {
      "type": "LOGIN_REQUEST",
      "data": {
        "user": "bob@gmail.com",
        "token": "2fdaafd2ec85c14976b6e80d184bf82df01b6e4835565f7a232efafc21b57657"
      }
    };

    
  // const today = new Date();
  // const yesterday = new Date(today);
  // yesterday.setDate(yesterday.getDate() - 1);
  // let start_time = yesterday.toISOString();
  // let end_time = today.toISOString();
    const article_request = {"type": "ARTICLE_REQUEST", "data": {
      "start_time": start_time,
      "end_time": end_time,
      "use_following_companies": use_following_companies,
      "companies": companies_list
    }};
    
    const socket = new WebSocket(url);

    socket.onopen = () => {
      console.log('Connection opened');
      console.log(article_request)
      socket.send(JSON.stringify(login_request));
      socket.send(JSON.stringify(article_request));
    };
    
    socket.onmessage = (event) => {
      const eventData = JSON.parse(event.data);
      if (eventData.type === "ARTICLE_RESPONSE" ) { //|| eventData.type === "ARTICLE_PUSH"

        setArticleList(cleanData(eventData.data)); //An array of article dictionaries.
        // const cleaned = mapArticles(temp); // Use received articles
        // setArticles(cleaned); // Update the state with the cleaned articles
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

  }, []); // Empty dependency array to run only once on component mount

  function cleanData(data) {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa")
    let cleaned = [];
    for (let i = 0; i < data.articles.length; i++) {
      let article = data.articles[i];
      let temp = {};
      temp["title"] = article.title;
      temp["summary"] = article.summary;
      temp["url"] = article.body;
      temp["time_published"] = moment().subtract(article.time_published, 'day').format("Do MMMM,YYYY"); 
      /// THIS IS DEPENDENT ON FORMAT FROM DB -> MIGHT NOT BE POSSIBLE DEPENDING

      let tempCompanies = [];

      for (let t = 0; t < article.ticker_info.length; t++) {
        let tempCompany = {};
        let ticker = article.ticker_info[t].ticker;
        tempCompany["name"] = data.companies[ticker].company_name;
        tempCompany["ticker"] = ticker;
        // console.log(ticker);
        // console.log(data.companies[ticker]);
        tempCompany["id"] = t;
        tempCompany["score"] = article.ticker_info[t].sentiment;
        tempCompany["prediction"] = article.ticker_info[t].prediction_string;
        tempCompanies.push(tempCompany);
      }
      temp["companies"] = tempCompanies; 
      cleaned.push(temp);
    }
    // console.log(cleaned);
    // console.log(articleData);
    return cleaned.map(article => ({
      title: article.title,
      summary: article.summary,
      url: article.url,
      timepublished: article.time_published,
      companies: article.companies
    }));
  }

  // Function to clean articles, adjust according to your needs
  const html_articles = [];
  for (let i = 0; i < articleList.length; i++) {
    html_articles.push(<Cards
      articleData={articleList[i]}
      // articleData={articleData}
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
