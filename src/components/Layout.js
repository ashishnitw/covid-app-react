import React from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const Layout = ({ data, country, children, handleCountryChange, allCountryData }) => (
  <>
    <nav className="navbar navbar-light bg-light">
      <a href="/tool/covid19-tracker" className="navbar-brand">
        <i className="fas fa-terminal"></i><strong> COVID-19 </strong>Tracker
      </a>
    </nav>
    <div className="row">
      <div className="col-md-6 col-xl-3">
        <LeftSidebar data={data} country={country} allCountryData={allCountryData}></LeftSidebar>
      </div>
      <div className="col-md-6 col-xl-5">{children}</div>
      <div className="col-md-12 col-xl-4">
        <RightSidebar data={data} country={country} handleCountryChange={handleCountryChange}></RightSidebar>
      </div>
    </div>
  </>
)

export default Layout;