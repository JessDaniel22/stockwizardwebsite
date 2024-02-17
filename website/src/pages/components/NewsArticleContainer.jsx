import React from 'react';
import Cards from './Cards'; // Import the Card component
import './NewsArticleContainer.css' // This will contain styles for the container
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowUp, faArrowDown, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';

const NewsArticleComponent = () => {
  // Example data for the cards
  const cardsData = [
   {logo: '🍎', 
   companyName: 'Apple Inc.', 
   followStatus: '(Following)', 
   title: 'News Article Title',
   content: 'Summary.... something interesting goes here',
   prediction: (
    <div>
      <p>
  Prediction: 
  <span style={{ margin: '0 8px' }}>
    <FontAwesomeIcon icon={faArrowUp} color="green" />
  </span>
  <span style={{ margin: '0 2px' }}>
    <FontAwesomeIcon icon={faArrowDown} color="red" />
  </span>
  <span style={{ margin: '0 2px' }}>
    <FontAwesomeIcon icon={faQuestionCircle}  />
  </span>
</p>
      
    </div>
  ),
   date: new Date('2021-10-01T12:00:00')},

   {logo: '🍎', 
   companyName: 'Something else Inc.', 
   followStatus: '(Following)', 
   title: 'News Article Title',
   content: 'Summary.... something interesting goes here',
   prediction: (
    <div>
       <p>
  Prediction: 
  <span style={{ margin: '0 8px' }}>
    <FontAwesomeIcon icon={faArrowUp} color="green" />
  </span>
  <span style={{ margin: '0 2px' }}>
    <FontAwesomeIcon icon={faArrowDown} color="red" />
  </span>
</p>
      
      
    </div>
  ),
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