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
        const eventType = JSON.parse(event.data);
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
    let cleaned = []
    for (let i=0; i < articles.length; i++){
      let article = articles[i];
      let temp = {};
      temp["title"] = article.title;
      temp["content"] = article.summary;
      temp["body"] = article.body;
      temp["logo"] = article.image;

    
      /////PROCESSING FOR COMPANIES (MULTIPLE OR SINGLE)
      temp["companyName"] = "TEMP";
      temp["followStatus"] = "TEMP";
      temp["prediction"] = "TEMP";


      cleaned.push(temp);
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