import React, { useState, useEffect, useRef  } from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';
import SearchResultsList from './SearchResultsList';


const Header = ()  => {

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownVisible]);

  const handleClick1 = () => {
    navigate('/');
  };
 
  return (
    <nav className="navbar">
      <div className='image-container1' onClick={handleClick1}></div> 
      <div className="search-bar">
        <form className='search-form d-flex align-items-center'>
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
        <div className="profile-icon"  onClick={() => navigate('/profile')} ><FontAwesomeIcon icon={faUserCircle} color='white'/></div> 
      </div>
    </nav>
  )
}

export default Header;