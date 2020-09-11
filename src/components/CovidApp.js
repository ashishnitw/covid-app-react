import React from 'react';
import Layout from './Layout'
import { fetchData, fetchCountries } from '../api/corona-lmao-ninja';
import CountryTable from './CountryTable';
import HorizontalBar from './HorizontalBar';
import CountryPicker from './CountryPicker';
import CardDaily from './CardDaily';

class Covid19Tracker extends React.Component {
  state = {
    data: {},
    country: '',
    allCountryData: []
  }

  async componentDidMount() {
    let data = await fetchData(this.state.country);
    let allCountryData = await fetchCountries();
    this.setState({ data, allCountryData });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country });
  }

  render() {
    const { data, country, allCountryData } = this.state;
    return (
      <Layout data={data} country={country} allCountryData={allCountryData} handleCountryChange={this.handleCountryChange}>
        <div className="covid19-tracker main">
          <p className="text-muted">Updated {new Date(data.updated).toDateString()}</p>
          <CardDaily data={data} country={country} />
          {/* <LineChart data={data} country={country} /> */}
          <CountryPicker handleCountryChange={this.handleCountryChange} allCountryData={allCountryData} />
          <HorizontalBar data={data} country={country} allCountryData={allCountryData} />
          <CountryTable allCountryData={allCountryData}/>
        </div>
      </Layout>
    );
  }
}

export default Covid19Tracker;