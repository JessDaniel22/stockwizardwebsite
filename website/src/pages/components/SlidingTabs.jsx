import React, { useState, useEffect } from 'react';
import './SlidingTabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { getCompanyRecs } from "../../getCompanyRecs"
import { requestCompanyRecs } from "../../requestCompanyRecs"

const SlidingTabs = () => {
  const [activeTab, setActiveTab] = useState();
  const [companyDataRecs, setCompanyDataRecs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("printhere")
        const data = await getCompanyRecs();
        // Assuming data.data contains the array of company recommendations
        setCompanyDataRecs(data);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="tabs-container1">
      <div className="tabs1">
      {companyDataRecs.map((tab, index) => (
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