import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function AboutUsPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our company's About Us page!</p>
      <Link className="nav-link" to="history">
        <h3>History</h3>
      </Link>    
      <Link className="nav-link" to="team">
        <h3>Team</h3>
      </Link>    
      <Link className="nav-link" to="careers">
        <h3>Careers</h3>
      </Link>    
      <Outlet />
    </div>
  );
}

export default AboutUsPage;
