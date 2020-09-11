import React from 'react';
import Chart from './Chart'


const RightSidebar = ({ data, country, handleCountryChange }) => (
  <div className="right-sidebar">
    <Chart data={data} country={country} />
  </div>
)

export default RightSidebar;