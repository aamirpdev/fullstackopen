import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country';

const App = () => {
  const [country, setCountry] = useState([]);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    return setFilter(event.target.value);
  };

  const handleShowClick = (event) => {
    setFilter(event.target.attributes.country.value);
  };

  let countriesFiltered = country.filter((country) => country.name.toLowerCase().includes(filter.toLowerCase()));

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountry(response.data);
    });
  }, []);

  return (
    <div>
      <form>
        <div>
          find countries <input value={filter} onChange={handleFilterChange} />
        </div>
      </form>
      <div>
        {countriesFiltered.length > 0 && filter.length > 0 ? (
          <Country countries={country} filter={filter} setFilter={setFilter} handleShowClick={handleShowClick} />
        ) : (
          ''
        )}

        {/* {results.map((country) => {
          <Country key={country.name} countries={countries} />;
        })} */}
      </div>
    </div>
  );
};

export default App;
