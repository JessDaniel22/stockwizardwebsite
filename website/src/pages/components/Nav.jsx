import React, { useState, useEffect, useRef  } from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChartLine, faCog, faNewspaper, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';


function Header() {

//DATA NEEDED HEREEEEEEEE!!!!!!!!!!!!!!!!


  // const [input, setInput] = useState(''); // State to hold the input value
  // const [data, setData] = useState(null);

  // const API_KEY = 'demo';

  // const fetchData = async (value) => {
  //   const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${value}&interval=5min&apikey=${API_KEY}`;
  //   try {
  //     const response = await fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         'User-Agent': 'request',
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error(`Error! status: ${response.status}`);
  //     }
  //     const result = await response.json();
  //     console.log(result); // For debugging
  //     setData(result); // Save the data to state
  //   } catch (error) {
  //     console.log('Error fetching data: ', error);
  //   }

  // };

  // const fetchData = (value) => {
  //   fetch('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=equity&apikey=7YFZ9O7RFHZXQGV2')
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //     });
      
  // };

  // const handleChange = (value) => {
  //   setInput(value);
  //   fetchData(value);
  // };

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

  const navigateToPage = (path) => {
    navigate(path); // Navigate to the specified path
  };

 
  return (
    <nav className="navbar">
      <div className='image-container1' onClick={handleClick1}></div> 
      <div className="search-bar">
      <form
            className='search-form d-flex align-items-center'
        >
            <button type='submit' title='Search'>
                <i className='bi bi-search'></i>
            </button>
            <input
                type='text'
                name='query'
                placeholder='Search'
                title='Enter search keyboard' 
                // value={input}
                // onChange={(e) => handleChange(e.target.value)}
            />    
        </form>
      </div>
      <div className="icons">
        <div className="profile-icon"  onClick={toggleDropdown} ref={dropdownRef}><FontAwesomeIcon icon={faUserCircle} color='white'/></div> 
        {isDropdownVisible && (
             <div className="profile-dropdown">
             <ul>
               <li><button onClick={() => navigateToPage('/profile')}>Profile</button></li>
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