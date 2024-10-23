import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';

const SearchBar = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState([]);

  // Fetch countries data
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const countriesList = data.map(country => ({
          name: country.name.common,
          capital: country.capital ? country.capital[0] : ''
        }));
        setCountries(countriesList);
      });
  }, []);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    return countries.filter(
      country => 
        country.name.toLowerCase().includes(inputValue) ||
        country.capital.toLowerCase().includes(inputValue)
    );
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    setValue(suggestion.name + ' - ' + suggestion.capital);
  };

  const inputProps = {
    placeholder: 'Type a country or capital',
    value,
    onChange: (event, { newValue }) => setValue(newValue)
  };

  const renderSuggestion = suggestion => (
    <div>
      {suggestion.name} - {suggestion.capital}
    </div>
  );

  return (
    <div>
      <h1>Country Search</h1>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={suggestion => suggestion.name + ' - ' + suggestion.capital}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={onSuggestionSelected}
      />
    </div>
  );
};

export default SearchBar;