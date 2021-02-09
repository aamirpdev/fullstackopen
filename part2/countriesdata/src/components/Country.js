import React from 'react';
import CountryDetail from './CountryDetail';

const Country = ({ countries, filter, setFilter }) => {
  const handleShowClick = (event) => {
    setFilter(event.target.attributes.country.value);
  };

  let countriesFiltered = countries.filter((country) => country.name.toLowerCase().includes(filter.toLowerCase()));

  const disp = () => {
    return countriesFiltered.map((country) => (
      <div key={country.numericCode}>
        {country.name}{' '}
        <button onClick={handleShowClick} country={country.name}>
          show
        </button>
      </div>
    ));
  };

  if (countriesFiltered.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }

  if (countriesFiltered.length === 1) {
    return <CountryDetail countriesFiltered={countriesFiltered} />;
  }

  return <div>{disp()}</div>;
};

export default Country;
