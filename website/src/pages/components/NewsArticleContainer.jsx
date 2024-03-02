// import React, {useState, useEffect} from 'react';
// import Cards from './Cards'; // Import the Card component
// import './NewsArticleContainer.css' // This will contain styles for the container
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faArrowUp, faArrowDown, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';

// const NewsArticleComponent = ({articles}) => {

// const [cleanedArticles, setCleanedArticles] = useState([]);

//   useEffect(() => {
//     const cleaned = cleanArticles(articles);
//     setCleanedArticles(cleaned);
//   }, [articles]);

//   const cleanArticles = (articles) => {
//     return articles.map(article => ({
//       logo: "temp", // Replace with actual data if available
//       companyName: "temp", // Replace with actual data if available
//       followStatus: "temp", // Replace with actual data if available
//       title: "temp", // Assuming you have a title
//       content: "temp", // Assuming you have a summary
//       prediction:"temp", // Assuming you have prediction data
//       // date: new Date(article.time_published) // Assuming you have a publication timestamp
//     }));
//   }

//   // const cleanArticles = (articles) => {
//   //   for (let i = 0; i < articles.length; i++) {
//   //     //Get components needed for container
//   //     var article = {
//   //       logo: "temp",
//   //       companyName: "temp",
//   //       followStatus: "temp",
//   //       title: "temp" ,
//   //       // articles[i].title
//   //       content: "temp",
//   //       // articles[i].summary,
//   //       prediction: "temp" // The prediction for the company
//   //       // date: new Date(articles[i].time_published) // The date of the news article
//   //     }
//   //     cleanedArticles.unshift(article);
//   //   }
//   //   return cleanedArticles;
//   // }


//   // const cleanArticles = (articles) => {
//   //   return articles.map(article => ({
//   //     logo: "temp", // Replace with actual data if available
//   //     companyName: "temp", // Replace with actual data if available
//   //     followStatus: "temp", // Replace with actual data if available
//   //     title: article.title, // Assuming you have a title
//   //     content: article.summary, // Assuming you have a summary
//   //     prediction: generatePredictionComponent(article.prediction), // Assuming you have prediction data
//   //     // date: new Date(article.time_published) // Assuming you have a publication timestamp
//   //   }));
//   // };



//   // Example data for the cards
// //   const cardsData = [
// //    {logo: '🍎', 
// //    companyName: 'Apple Inc.', 
// //    followStatus: '(Following)', 
// //    title: 'News Article Title',
// //    content: 'Summary.... something interesting goes here',
// //    prediction: (
// //     <div>
// //       <p>
// //   Prediction: 
// //   <span style={{ margin: '0 8px' }}>
// //     <FontAwesomeIcon icon={faArrowUp} color="green" />
// //   </span>
// //   <span style={{ margin: '0 2px' }}>
// //     <FontAwesomeIcon icon={faArrowDown} color="red" />
// //   </span>
// //   <span style={{ margin: '0 8px' }}>
// //     <FontAwesomeIcon icon={faQuestionCircle} color="white" />
// //   </span>
// // </p>
      
// //     </div>
// //   ),
// //    date: new Date('2021-10-01T12:00:00')},
// //    {logo: '🍎', 
// //    companyName: 'Apple Inc.', 
// //    followStatus: '(Following)', 
// //    title: 'News Article Title',
// //    content: 'Summary.... something interesting goes here',
// //    prediction: (
// //     <div>
// //       <p>
// //   Prediction: 
// //   <span style={{ margin: '0 8px' }}>
// //     <FontAwesomeIcon icon={faArrowUp} color="green" />
// //   </span>
// //   <span style={{ margin: '0 2px' }}>
// //     <FontAwesomeIcon icon={faArrowDown} color="red" />
// //   </span>
// //   <span style={{ margin: '0 8px' }}>
// //     <FontAwesomeIcon icon={faQuestionCircle} color="white" />
// //   </span>
// // </p>
      
// //     </div>
// //   ),
// //    date: new Date('2021-10-01T12:00:00')},
// //    {logo: '🍎', 
// //    companyName: 'Apple Inc.', 
// //    followStatus: '(Following)', 
// //    title: 'News Article Title',
// //    content: 'Summary.... something interesting goes here',
// //    prediction: (
// //     <div>
// //       <p>
// //   Prediction: 
// //   <span style={{ margin: '0 8px' }}>
// //     <FontAwesomeIcon icon={faArrowUp} color="green" />
// //   </span>
// //   <span style={{ margin: '0 2px' }}>
// //     <FontAwesomeIcon icon={faArrowDown} color="red" />
// //   </span>
// //   <span style={{ margin: '0 8px' }}>
// //     <FontAwesomeIcon icon={faQuestionCircle} color="white" />
// //   </span>
// // </p>
      
// //     </div>
// //   ),
// //    date: new Date('2021-10-01T12:00:00')},
// //    {logo: '🍎', 
// //    companyName: 'Apple Inc.', 
// //    followStatus: '(Following)', 
// //    title: 'News Article Title',
// //    content: 'Summary.... something interesting goes here',
// //    prediction: (
// //     <div>
// //       <p>
// //   Prediction: 
// //   <span style={{ margin: '0 8px' }}>
// //     <FontAwesomeIcon icon={faArrowUp} color="green" />
// //   </span>
// //   <span style={{ margin: '0 2px' }}>
// //     <FontAwesomeIcon icon={faArrowDown} color="red" />
// //   </span>
// //   <span style={{ margin: '0 8px' }}>
// //     <FontAwesomeIcon icon={faQuestionCircle} color="white" />
// //   </span>
// // </p>
      
// //     </div>
// //   ),
// //    date: new Date('2021-10-01T12:00:00')},
// //    {logo: '🍎', 
// //    companyName: 'Apple Inc.', 
// //    followStatus: '(Following)', 
// //    title: 'News Article Title',
// //    content: 'Summary.... something interesting goes here',
// //    prediction: (
// //     <div>
// //       <p>
// //   Prediction: 
// //   <span style={{ margin: '0 8px' }}>
// //     <FontAwesomeIcon icon={faArrowUp} color="green" />
// //   </span>
// //   <span style={{ margin: '0 2px' }}>
// //     <FontAwesomeIcon icon={faArrowDown} color="red" />
// //   </span>
// //   <span style={{ margin: '0 8px' }}>
// //     <FontAwesomeIcon icon={faQuestionCircle} color="white" />
// //   </span>
// // </p>
      
// //     </div>
// //   ),
// //    date: new Date('2021-10-01T12:00:00')},

// //    {logo: '🍎', 
// //    companyName: 'Something else Inc.', 
// //    followStatus: '(Following)', 
// //    title: 'News Article Title',
// //    content: 'Summary.... something interesting goes here',
// //    prediction: (
// //     <div>
// //        <p>
// //   Prediction: 
// //   <span style={{ margin: '0 8px' }}>
// //     <FontAwesomeIcon icon={faArrowUp} color="green" />
// //   </span>
// //   <span style={{ margin: '0 2px' }}>
// //     <FontAwesomeIcon icon={faArrowDown} color="red" />
// //   </span>
// // </p>
      
      
// //     </div>
// //   ),
// //    date: new Date('2021-10-01T12:00:00')}
   
// //   ];

//   return (
//     <div className="cards-container" >
//       {cleanedArticles.map((card, index) => (
//         <Cards key={index} {...article}/>
//       ))}
//     </div>
//   );
// };

// export default NewsArticleComponent;

import React, { useState, useEffect } from 'react';
import Cards from './Cards';

const NewsArticleComponent = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = 'wss://cs261se.containers.uwcs.co.uk';
    let attempts = 0;
    let delay = 1000;

    const connect = () => {
      const socket = new WebSocket(url);

      socket.onmessage = (event) => {
        const eventType = JSON.parse(event);
        if (eventType.type === "ARTICLE_RESPONSE" || eventType.type === "ARTICLE_PUSH") {
          const temp = cleanArticles(eventType.articles);
          const cleaned = mapArticles(temp); // Use received articles
          setArticles(cleaned); // Update the state with the cleaned articles
        }
      };

      socket.addEventListener('open', () => {
        console.log('Connection opened');
        attempts = 0; //Reset reconnect attempts
        delay = 1000; //Reset delay to 1s
      });

      socket.addEventListener('close', (event) => {
        console.log('Server closed connection: ', event.code);

      //Attempt to reconnect:
      if (attempts < 5) {
        setTimeout(() => {
          console.log('Reconnecting...');
          connect();
          attempts++;
          delay = Math.min(delay * 2, 60000); //Double delay up to one minute
        }, delay * (1 + 0.3 * Math.random())); //Jitter to avoid synchronised reconnection attempts
      } else {
        console.log('Failed to reconnect after 5 attempts.');
      }
      });

      socket.addEventListener('error', (event) => {
        console.log('WebSocket error: ', event);
      });
    };

    connect(); //Initial connection
  }, []); // Empty dependency array to run only once on component mount

 
  function cleanArticles(articles) {
    cleaned = []
    for (i=0; i < articles.length; i++){
      let article = articles[i];
      let temp = {};
      temp[title] = article.title;
      temp[content] = article.summary;
      temp[body] = article.body;
      temp[logo] = article.image;

    
      /////PROCESSING FOR COMPANIES (MULTIPLE OR SINGLE)
      temp[companyName] = "TEMP";
      temp[followStatus] = "TEMP";
      temp[prediction] = "TEMP";


      temp.append(article);
    }
    return cleaned;
  }
  // Function to clean articles, adjust according to your needs
  const mapArticles = (articles) => {
    return articles.map(article => ({
      logo: article.logo,
      companyName: article.companyName, 
      followStatus: article.followStatus, 
      title: article.title, 
      content: article.content, 
      prediction: article.prediction
    }));
  };

  return (
    <div className="cards-container">
      {articles.map((article, index) => (
        <Cards key={index} {...article} />
      ))}
    </div>
  );
};

export default NewsArticleComponent;