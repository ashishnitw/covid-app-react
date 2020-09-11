import React from 'react';
import CountUp from 'react-countup';

const Info = ({ data: { cases, active, recovered, deaths, updated } }) => {
  if (!active) {
    return null;
  }

  return (
    <div>
      <div className="cards card card-shadow">
        <div className="card-body">
          <h4 className="card-title">Total Confirmed Cases</h4>
          <h1 className="card-subtitle" style={{color: '#FE4C54'}}>
            <CountUp start={0} end={cases} duration={1.2} separator="," />
          </h1>
          <table className="table table-borderless count-table">
            <tbody className="">
              <tr className="count-row">
                <td className="text-left"><h5>Active:</h5></td>
                <td className="text-right"><h5><CountUp start={0} end={active} duration={1.2} separator="," /></h5></td>
              </tr>
              <tr className="count-row">
                <td className="text-left"><h5>Recovered:</h5></td>
                <td className="text-right"><h5><CountUp start={0} end={recovered} duration={1.2} separator="," /></h5></td>
              </tr>
              <tr className="count-row">
                <td className="text-left"><h5>Deaths:</h5></td>
                <td className="text-right"><h5><CountUp start={0} end={deaths} duration={1.2} separator="," /></h5></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Info;
