import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

export default function PortfolioContainer() {
    // initial state of currentpage set to home
  const [currentPage, setCurrentPage] = useState('Home');


  // function to render the different pages
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  // function to set current page
  const handlePageChange = (page) => {
    setCurrentPage(page);
}

  return (
    <div>
      {/* passing currentpage and the handler as props to NavTabs Component*/}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Renders the current page */}
      {renderPage()}
    </div>
  );
}
