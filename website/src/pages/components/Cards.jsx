import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { useCompanies } from '../../api/CompaniesContext';
import './Cards.css'; // Assuming you've added styling

const Cards = ({ articleData}) => {
  // State to hold the formatted time ago string
  const [timeAgoText, setTimeAgoText] = useState('');
  const { companies, toggleFollow } = useCompanies();
  const navigate = useNavigate();

  useEffect(() => {
    const date = articleData.date;
    // Immediately update the time ago text upon component mount
    setTimeAgoText(calculateTimeAgo(date));

    // Set up an interval to update the time ago text every minute
    const intervalId = setInterval(() => {
      setTimeAgoText(calculateTimeAgo(date));
    }, 60000); // 60,000 milliseconds = 1 minute

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [articleData.date]);

  // Function to calculate how long ago the card was updated
  const calculateTimeAgo = (date) => {
    const now = new Date();
    const articleDate = new Date(date);
    const diffInSeconds = Math.floor((now - articleDate) / 1000);
    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) { // this needs to be changed 
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return 'Just now';
    }
  };
  
  const handleCompanyClick = (companyId) => {
    navigate(`/company/${companyId}`); // Navigate to company page
  };

  

  return (
    <div className="article-card">
      <h2>{articleData.title}</h2>
      <p>{articleData.summary}</p>
      <div className="companies-list">
        {articleData.companies.map((articleCompany) => {

          const company = companies.find(c => c.id === articleCompany.id);
          return (
            <div key={articleCompany.id} className="company-info" >
              <h3 onClick={() => handleCompanyClick(articleCompany.id)}>{articleCompany.name}</h3>
              <p>Prediction: {articleCompany.prediction}</p>
              <p>Stock: {articleCompany.stock}</p>
              <button onClick={(e) => {
                e.stopPropagation(); // Prevent triggering card click
                toggleFollow(articleCompany.id);
              }}>
                {company?.isFollowing ? 'Unfollow' : 'Follow'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;