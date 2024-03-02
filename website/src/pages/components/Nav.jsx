import React, { useState, useEffect, useRef  } from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChartLine, faCog, faNewspaper, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';


function Header() {

  const navigate = useNavigate();

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    }
     // Add when the dropdown is visible
     if (isDropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownVisible]);

  const handleClick1 = () => {
    navigate('/');
  };

 
  return (
    <nav className="navbar">
      <div className='image-container1' onClick={handleClick1}></div> 
      <div className="search-bar">
      <form
            className='search-form d-flex align-items-center'
            method='POST'
            action='#'
        >
            <button type='submit' title='Search'>
                <i className='bi bi-search'></i>
            </button>
            <input
                type='text'
                name='query'
                placeholder='Search'
                title='Enter search keyboard' 
            />    
        </form>
      </div>
      <div className="icons">
        <div className="notif-bell"><FontAwesomeIcon icon={faBell} color='white' /></div> {/* Replace with an icon */}
        <div className="profile-icon"  onClick={toggleDropdown} ref={dropdownRef}><FontAwesomeIcon icon={faUserCircle} color='white'/></div> 
        {isDropdownVisible && (
             <div className="profile-dropdown">
             <ul>
               <li>Profile</li>
               <li className='settings-container'>Settings</li>
               <li>Logout</li>
             </ul>
           </div>
          )}
      </div>
    </nav>
  )
}

export default Header;