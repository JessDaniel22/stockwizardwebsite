import React from 'react';
import Cards from './Cards'; // Import the Card component
import './NewsArticleContainer.css' // This will contain styles for the container
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowUp } from '@fortawesome/free-solid-svg-icons';

const NewsArticleComponent = () => {
  // Example data for the cards
  const cardsData = [
   {logo: '🍎', 
   companyName: 'Apple Inc.', 
   followStatus: '(Following)', 
   title: 'News Article Title',
   content: 'Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services.',
   prediction: 'Buy', 
   date: new Date('2021-10-01T12:00:00')},

   {logo: '🍎', 
   companyName: 'Something else Inc.', 
   followStatus: '(Following)', 
   title: 'News Article Title',
   content: 'Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services.',
   prediction: <FontAwesomeIcon icon={faArrowUp} color='green'></FontAwesomeIcon>, 
   date: new Date('2021-10-01T12:00:00')}
   
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <Cards key={index} logo={card.logo} companyName={card.companyName} followStatus={card.followStatus}  title={card.title} date={card.date} content={card.content} prediction={card.prediction}/>
      ))}
    </div>
  );
};

export default NewsArticleComponent;