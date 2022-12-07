import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='container'>
      <header className= 'd-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
        
        <h1 className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none'>
          Youssef Ojeil
        </h1>

        <ul className="nav nav-custom">
          <li className="nav-item">
            <a href="#home" onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'nav-link black-text' : 'nav-link'}>
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}          
              className={currentPage === 'Portfolio' ? 'nav-link black-text' : 'nav-link'}>
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link black-text' : 'nav-link'}>
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="#resume" onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link black-text' : 'nav-link'}>
              Resume
            </a>
          </li>
        </ul>

      </header>
    </div>
  );
}

export default NavTabs;
