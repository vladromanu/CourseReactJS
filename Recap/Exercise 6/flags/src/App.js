import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./App.css";

/**
 * Imported icons & settings
 */
import { searchIcon } from "./icons/searchIcon";
import { URL, ERROR_TYPES } from "./settings";


const App = () => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);

  const [region, setRegion] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  /**
   * Fetch Countries
   */
  const fetchCountries = async () => {

    setIsLoading(true);
    setErrorMessage('');

    const hasRegionFilter = region != '';
    const hasNameFilter = name != '';

    let queryString = '/all';

    // Choose to call either region or name api
    // If region is selected call /region then filter by the name locally 
    if (hasRegionFilter) {
      queryString = `/region/${region}`;
    } else {
      queryString = hasNameFilter ? `/name/${name}` : queryString;
    }

    try {
      const response = await axios(`${URL}${queryString}`);
      const { hits } = response.data;

      // Filter the names from the regions list with the value from the name query
      if (hasRegionFilter && hasNameFilter) {
        response.data = response.data.filter(item => item.name.toLowerCase().includes(name));
      }

      setCountries(response.data);
    } catch (e) {
      setErrorMessage(ERROR_TYPES[e.message] ?? "Ooooops!");
    }

    setIsLoading(false);
  };

  /**
   * Fetch Regions
   * -- mimmick a fetch 
   */
  const fetchRegions = () => {
    setIsLoading(true);

    // probably an async call here to get the regions
    setRegions([
      { name: "Africa", id: "africa" },
      { name: "Americas", id: "americas" },
      { name: "Asia", id: "asia" },
      { name: "Europe", id: "europe" },
      { name: "Oceania", id: "oceania" }]);

    setIsLoading(false);
  }

  /**
   * On Load
   */
  useEffect(() => {
    fetchRegions();
    fetchCountries();
  }, []);


  /**
   * Event Handlers
   */
  const handleOnChangeSearch = (event) => {
    setName(event.target.value)
  };

  const handleOnKeyPress = (e) => {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { //Enter keycode
      fetchCountries();
    }
  };

  const handleOnClick = (event) => {
    fetchCountries();
  };

  const handleRegionChange = (regionValue) => {
    setRegion(regionValue);

    // fetchCountries(); - if we want to reload based on selection
  }



  /**
   * ShowContent - Component
   */
  const ShowContent = () => {
    if (isLoading) {
      return <Loading />
    }

    if (errorMessage.length) {
      return <p>Error: {errorMessage}</p>
    }

    return <div className="row">
      {countries.map((item, k) =>
        <div className="col-md-3" key={k}>
          <div key={item.alpha2Code} className="card mb-4 shadow-sm">

            <img src={item.flag} alt={item.name} width="100%" height="160px" />

            <div className="card-body">
              <h4 className="card-text">{item.name}</h4>
              <b>Population:</b> {item.population}<br />
              <b>Region:</b> {item.region}<br />
              <b>Capital:</b> {item.capital}
            </div>

          </div>
        </div>
      )}
    </div>;
  };

  const Loading = () => {
    return <p>Loading ...</p>;
  }

  /**
   * FilterByRegion - Component
   */
  const FilterByRegion = (props) => {

    const { onChange } = props;

    const handleFilterChange = (event) => {
      onChange(event.target.value);
    }

    if (isLoading) {
      return <Loading />
    }

    return <select id="region" className="custom-select" onChange={handleFilterChange} value={props.region} >
      <option value="" disabled>Filter by region</option>
      {regions.map((item, k) =>
        <option key={k} value={item.id}>{item.name}</option>
      )}
    </select>;
  };

  return (
    <div className="container wrapper">
      <div className="row">
        <div className="col-8">
          <div className="input-group mb-3">

            <div className="input-group-prepend">
              <span className="input-group-text" id="search-country">
                {searchIcon}
              </span>
            </div>

            <input type="text" className="form-control" placeholder="Search for a country" aria-label="search for country" aria-describedby="search-country"
              id='search-id' value={name}
              onChange={handleOnChangeSearch} onKeyPress={handleOnKeyPress}
            />

            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" id="button-search"
                onClick={handleOnClick}>Search</button>
            </div>

          </div>
        </div>

        <div className="col-4">
          <FilterByRegion onChange={handleRegionChange} region={region} />
        </div>
      </div>

      <ShowContent />
    </div>
  )
};

export default App