import React from 'react';
import CountUp from 'react-countup';

const Info = ({ data: { cases, recovered, deaths, todayCases, todayDeaths }, country }) => {
  if (!(todayCases || country)) {
    return null;
  }

  return (
    <div>
      <div className="cards card card-shadow">
        <h4 className="text-center" style={{marginTop: '10px', marginBottom:'-10px'}}>{country ? country : 'Global'}</h4>
        <div className="row card-body text-center">
          <div className="col-6 col-md-3 col-sm-4">
            <strong className="card-title">Today's Cases</strong>
            <h3 className="card-subtitle" style={{ color: '#36A2EB' }}>
              <CountUp start={0} end={todayCases} duration={1.2} separator="," />
            </h3>
          </div>
          <div className="col-6 col-md-3 col-sm-4">
            <strong className="card-title">Today's Deaths</strong>
            <h3 className="card-subtitle" style={{ color: '#FE4C54' }}>
              <CountUp start={0} end={todayDeaths} duration={1.2} separator="," />
            </h3>
          </div>
          <div className="col-6 col-md-3 col-sm-4">
            <strong className="card-title">Recovery Rate</strong>
            <h3 className="card-subtitle" style={{ color: '#71B37C' }}>
              {Math.round(recovered*100/cases) + '%'}
            </h3>
          </div>
          <div className="col-6 col-md-3 col-sm-4">
            <strong className="card-title">Mortality Rate </strong>
            <h3 className="card-subtitle" style={{ color: '#FE4C54' }}>
              {Math.round(deaths*100/cases) + '%'}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
