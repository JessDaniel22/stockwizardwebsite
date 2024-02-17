import React, { useState } from 'react';
import './CompanyHeader.css'; // Assuming you have a CSS file for styling

const CompanyHeader = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="company-header">
      <header className="company-title">AAPL</header>
      <p className="company-logo">Logo</p> {/* Assuming emoji for simplicity */}
      <button className="follow-button" onClick={toggleFollow}>
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default CompanyHeader;