import React, { useState, useEffect } from 'react';
import './Cards.css'; // Assuming you've added styling

const Cards = ({ logo, companyName, followStatus, title, content, prediction, date }) => {
  // State to hold the formatted time ago string
  const [timeAgoText, setTimeAgoText] = useState('');

  // Function to calculate how long ago the card was updated
  const calculateTimeAgo = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return 'Just now';
    }
  };

  useEffect(() => {
    // Immediately update the time ago text upon component mount
    setTimeAgoText(calculateTimeAgo(date));

    // Set up an interval to update the time ago text every minute
    const intervalId = setInterval(() => {
      setTimeAgoText(calculateTimeAgo(date));
    }, 60000); // 60,000 milliseconds = 1 minute

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [date]);

  return (
    <div className="card">
        <p className='top'>
        {logo} 
        {companyName} 
        {followStatus} 
        {title}
        {timeAgoText} - updates</p>
      
        
     
      <p>{content}</p>
      <p>{prediction}</p> 
      
    </div>
  );
};

export default Cards;