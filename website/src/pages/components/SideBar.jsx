import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faSignOutAlt, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { getCompanyRecs } from "../../getCompanyRecs"
import './SideBar.css'; 

function Sidebar() {
  const navigate = useNavigate();
  const [companyData, setCompanyDataRecs] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCompanyRecs();
        setCompanyDataRecs(data);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="sidebar">
        <div className="section1">
            <ul className='bullets'>
            <li onClick={() => navigate('/')}><FontAwesomeIcon icon={faHome} /> <span>Home</span></li>
          <li onClick={() => navigate('/profile')}><FontAwesomeIcon icon={faUser} /> <span>Following</span></li>
          <li onClick={() => navigate('/settings')}><FontAwesomeIcon icon={faCog} /> <span>Settings</span></li>
          <li onClick={() => navigate('/login')}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></li>
            </ul>
            <div className="divider" ></div>
            </div>
            <div className="section2">
      <h2 className='follow-title'>Following</h2>
{/* 
          <ul className="company-list">
            {companyData.map((company, index) => (
              <li key={index} onClick={() => navigate(`/company/${company}`)}>
                {company}  
              </li>
            ))}
          </ul> */}

      
    </div>
    </div>
  );
}

export default Sidebar;