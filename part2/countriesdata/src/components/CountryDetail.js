import React from 'react';

const CountryDetail = ({ countriesFiltered }) => {
  const capital = countriesFiltered[0].capital;
  const population = countriesFiltered[0].population;

  return (
    <div>
      <h2>{countriesFiltered[0].name}</h2>
      <div>capital {capital}</div>
      <div>population {population}</div>
      <h2>languages</h2>
      {countriesFiltered[0].languages.map((language) => {
        return <li key={language.nativeName}>{language.name}</li>;
      })}
      <br />
      <img src={countriesFiltered[0].flag} alt='country flag' width='200' />
    </div>
  );
};

export default CountryDetail;
