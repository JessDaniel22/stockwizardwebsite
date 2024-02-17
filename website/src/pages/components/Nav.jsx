import React from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';


function header() {
  return (
    <nav className="navbar">
      <div className='image-container'></div> {/* Replace with an actual logo image or SVG */}
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
        <div className="profile-icon"><FontAwesomeIcon icon={faUserCircle} color='white'/></div> {/* Replace with an icon or profile picture */}
      </div>
    </nav>
  )
}

export default header