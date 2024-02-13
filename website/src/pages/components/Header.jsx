import React from 'react';
import './header.css';
import Logo from './Logo';
import './searchBar.css';

function Header() {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
        
        <Logo/>
        <div className='search-bar'>
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
     <div>navigation</div>
    </header>
  );
}

export default Header