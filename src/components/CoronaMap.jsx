import React from 'react';
import CountUp from 'react-countup';
import MapBox from '../common/MapBox';

const CoronaMap = ({ data: { cases, active, recovered, deaths, updated } }) => {
  return (
    <div>
      <MapBox />
    </div>
  );
};
export default CoronaMap;
