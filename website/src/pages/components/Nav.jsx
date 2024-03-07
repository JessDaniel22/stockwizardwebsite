import React, { useState, useEffect, useRef  } from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChartLine, faCog, faNewspaper, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';
import SearchResultsList from './SearchResultsList';


const Header = ()  => {

//fetching from json server!!!!


  const [input, setInput] = useState(''); 
  const [results, setResults] = useState([]);

  const fetchData = (value) => {
    fetch('')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value) &&
            user.symbol
          );
        });
        setResults(results);
      });
      
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

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
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />    
        </form>
        {results && results.length > 0 && <SearchResultsList results={results} />}
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