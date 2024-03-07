import React, { useState } from 'react';
import './SlidingTabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { getCompanyRecs } from "../../getCompanyRecs"

const SlidingTabs = () => {
  const [activeTab, setActiveTab] = useState();
  const navigate = useNavigate();


  const companyDataRecs = getCompanyRecs().then(data => {  //Data for company recommendations
    console.log(data); 
  }).catch(error => {
    console.error('An error occurred:', error);
  });
  const tabs = [
    'AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA', 'FB',
    'NVDA', 'PYPL', 'INTC', 'CSCO', 'NFLX', 'ADBE', 'CMCSA',
    'PEP', 'AVGO', 'TMUS', 'COST', 'QCOM', 'TXN', 'SBUX'
    ];

  return (
    <div className="tabs-container1">
      <div className="tabs1">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => {setActiveTab(index); navigate(`/company/${tab}`);}}
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