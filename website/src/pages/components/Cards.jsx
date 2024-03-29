import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCompanies } from '../../api/CompaniesContext';
import './Cards.css'; 

const Cards = ({ articleData}) => {
  const { companies, toggleFollow } = useCompanies();
  const navigate = useNavigate();

  const handleCompanyClick = (companyTicker) => {
    navigate(`/company/${companyTicker}`); // Navigate to company page
  };

  const handleArticleClick = (url) => {
    window.location.href = url; // Navigate to the article URL
  };

  return (
    <div className="article-card">
      <h2 style={{ cursor: 'pointer' }}>
        <span className='title' onClick={() => handleArticleClick(articleData.url)}>{articleData.title}</span>
        {articleData.timepublished ? (
          <span className="time-published">
            {articleData.timepublished}
          </span>
        ) : (
          ''
        )}
      </h2>
      <p className='summary'>{articleData.summary}</p>
      <div className="companies-list">
        {articleData.companies.map((articleCompany) => {
          const company = companies.find(c => c.id === articleCompany.id);
          return (
            <div key={articleCompany.id} className="company-info-container">
            <div className="company-header">
              <h3 onClick={() => handleCompanyClick(articleCompany.ticker)}>{articleCompany.name}
                {articleCompany.score > 0 ? (
                    <span style={{ color: 'green' }}>↑</span>
                  ) : articleCompany.score < 0 ? (
                    <span style={{ color: 'red' }}>↓</span>
                  ) : (
                    <span style={{ color: 'gray' }}>-</span>
                  )
                }
              </h3>
              <p className="company-score-date">
                <span>
                  <button className="button" onClick={(e) => {
                    e.stopPropagation();
                    toggleFollow(articleCompany.id);
                    }}>
                    {company?.isFollowing ? 'Unfollow' : 'Follow'}
                  </button>
                </span>
              </p>
            </div>
            <p className="company-prediction">{articleCompany.prediction}</p>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;