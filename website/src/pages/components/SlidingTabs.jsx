import React, { useState } from 'react';
import './SlidingTabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const SlidingTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    'AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA', 'FB',
    'NVDA', 'PYPL', 'INTC', 'CSCO', 'NFLX', 'ADBE', 'CMCSA',
    'PEP', 'AVGO', 'TMUS', 'COST', 'QCOM', 'TXN', 'SBUX'
    ];

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}  <span className="info-icon">
            <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
            
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingTabs;