import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import CompanyInfo from "../UnitTestingDemoPage/components/CompanyInfo";

function AboutUsPage() {
  return (
    <div className="row">
      <h1>About Us</h1>
      <p>Welcome to our company's About Us page!</p>
      <div className="col-md-2 bg-primary-subtle p-5">
        <Link className="nav-link" to="history">
          <h3>History</h3>
        </Link>
        <Link className="nav-link" to="team">
          <h3>Team</h3>
        </Link>
        <Link className="nav-link" to="careers">
          <h3>Careers</h3>
        </Link>
      </div>
      <div className="col-md-10">
        <Outlet />
      </div>
    </div>
  );
}

export default AboutUsPage;
