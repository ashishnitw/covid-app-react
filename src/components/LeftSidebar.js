import React from 'react';
import Cards from './CardGlobal'

const LeftSidebar = ({ data, country, handleCountryChange, allCountryData}) => (
  <div className="left-sidebar text-center" style={{maxWidth: '25rem'}}>
    <Cards data={data} country={country}></Cards>
    <a href="/tool/map-box">
      <button className="btn btn-2">Full Screen Map</button>
    </a>
    {/* <CountryFilter handleCountryChange={handleCountryChange} countryList={countryList} /> */}
    
  </div>

)

export default LeftSidebar;