import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { useCompanies } from "../../api/CompaniesContext";
// import moment from 'moment';

const NewsArticleComponent = ({companyId}) => {
  // const [articles, setArticles] = useState([]);
  const { companies, toggleFollow } = useCompanies();

  const articleData = {
    id: 1,
    title: "Tech Industry Trends",
    summary:
      "An overview of the latest trends in the tech industry, including AI advancements and blockchain technology.",
      url: "https://www.technews.com",
      timepublished: "2021-10-01",
    companies: [
      {
        id: 1,
        name: "TechCorp",
        prediction: "The prediction is a score since..",
        score: 0.75,
      },
      {
        id: 2,
        name: "InnovateX",
        prediction: "The prediction is a score since..",
        score: -9.4,
      },
      {
        id: 3,
        name: "FutureTech",
        prediction: "The prediction is a score since.. ",
        score: 8.5,
      },
    ],
  };

  // const filteredArticleData = articleData.filter(article => 
  //   article.companies.some(company => company.id === companyId)
  // );

  // const toggleFollow = (companyId) => {
  //   setCompaniesInfo(companiesInfo.map(company => {
  //     if (company.id === companyId) {
  //       return { ...company, isFollowing: !company.isFollowing };
  //     }
  //     return company;
  //   }));
  // };

  // useEffect(() => {
  //   const url = 'wss://cs261se.containers.uwcs.co.uk';
  //   let attempts = 0;
  //   let delay = 1000;

  //   const connect = () => {
  //     const socket = new WebSocket(url);
  //   }
  //     socket.onmessage = (event) => {
  //       const eventData = JSON.parse(event);
  //       if (eventData.type === "ARTICLE_RESPONSE" || eventData.type === "ARTICLE_PUSH") {
  //         const temp = cleanData(eventData.data);
  //         const cleaned = mapArticles(temp); // Use received articles
  //         setArticles(cleaned); // Update the state with the cleaned articles
  //       }
  //     };

  //     socket.addEventListener('open', () => {
  //       console.log('Connection opened');
  //       attempts = 0; //Reset reconnect attempts
  //       delay = 1000; //Reset delay to 1s
  //     });

  //     socket.addEventListener('close', (event) => {
  //       console.log('Server closed connection: ', event.code);

  //     //Attempt to reconnect:
  //     if (attempts < 5) {
  //       setTimeout(() => {
  //         console.log('Reconnecting...');
  //         connect();
  //         attempts++;
  //         delay = Math.min(delay * 2, 60000); //Double delay up to one minute
  //       }, delay * (1 + 0.3 * Math.random())); //Jitter to avoid synchronised reconnection attempts
  //     } else {
  //       console.log('Failed to reconnect after 5 attempts.');
  //     }
  //     });

  //     socket.addEventListener('error', (event) => {
  //       console.log('WebSocket error: ', event);
  //     });

  //   connect(); //Initial connection
  // }, []); // Empty dependency array to run only once on component mount

  // function cleanData(data) {
  //   let cleaned = []
  //   for (let i=0; i < data.articles.length; i++){
  //     let article = data.articles[i];
  //     let temp = {};
  //     temp["title"] = article.title;
  //     temp["summary"] = article.summary;
  //     temp["url"] = article.body;
  //     temp["time_published"] = moment().subtract(article.time_published, 'day').format("Do MMMM,YYYY"); 
  //     /// THIS IS DEPENDENT ON FORMAT FROM DB -> MIGHT NOT BE POSSIBLE DEPENDING

  //     let tempCompanies = [];

  //     for (let t=0; t < article.ticker_info.length; t++){
  //       let tempCompany = {};
  //       let ticker = article.ticker_info[t].ticker;
  //       for (let j=0; j < data.companies.length; j++) {
  //         if (data.companies[i] === ticker) {
  //           tempCompany["company_name"] = data.companies[i].company_name;
  //         }
  //       }
  //       tempCompany["id"] = t;
  //       tempCompany["sentiment_score"] = article.ticker_info.sentiment_score;
  //       tempCompany["prediction"] = article.ticker_info.prediction_string;
  //       tempCompanies.push(tempCompany);


  //     temp["companies"] = tempCompanies; 
  //     cleaned.push(temp);
  //   }
    return cleaned.map(article => ({
      title: article.title,
      summary: article.summary,
      url: article.url,
      timepublished: moment(article.timepublished).format("Do MMMM, YYYY"),
      companies: article.companies
  }));
  // }


  // // Function to clean articles, adjust according to your needs

  // // CURRENTLY WON'T WORK AS NEED UPDATED FORMAT 
  // const mapArticles = (articles) => {
  //   return articles.map(article => ({
  //     title: article.title,
  //     url: article.url,
  //     time_published: article.time_published,
  //     summary: article.summary,
  //   }));
  // };

  // return (
  //   <div className="cards-container">
  //     {articles.map((article, index) => (
  //       <Cards key={index} {...article} />
  //     ))}
  //   </div>
  // );
  return (
    <div className="cards-container">

        <Cards

          articleData={articleData}
          toggleFollow={toggleFollow}
          companies={companies}
        />

    </div>
  );
};

export default NewsArticleComponent;