import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';

// Define the API endpoint
const API_URL = 'https://restcountries.com/v3.1/all';

const App = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState([]);

  // Fetch country data from API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(API_URL);
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountries();
  }, []);

  // Get suggestion based on input value
  const getSuggestions = (value) => {
    const inputValue = value.toLowerCase();
    return countries.filter(country => {
      return country.name.common.toLowerCase().includes(inputValue) ||
             (country.capital && country.capital[0].toLowerCase().includes(inputValue));
    });
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setS