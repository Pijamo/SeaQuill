import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import parse from 'html-react-parser';
// import {getCityState} from '../../fetcher' 
import { useState} from "react";


const StateAutoComplete = ({data}) => {
  
  const [suggestions, setSuggestions] = useState([]); //suggestions used to populate autocomplete menu
  const [suggestionIndex, setSuggestionIndex] = useState(0); //index of active suggestion
  const [suggestionsActive, setSuggestionsActive] = useState(false); //to toggle visibility of autocomplete 
  const [value, setValue] = useState(""); //autocomplete suggestion user has selected

  const handleChange = (e) => {
    const enteredState = e.target.value.toLowerCase(); //what the user is typing (user types a state)
    setValue(enteredState );
    if (enteredState.length > 1) {
      var usStates = [] //list of keys
      var usStateCodes = [] //list of keys
      var cities = [] //list of lists

      for (let i = 0; i <= data.length; i++){
        usStates.push(data.usStates[i]) 
        usStateCodes.push(data.usStateCodes[i]) 
        cities.push(data.cities[i])
    }
      
      const filterSuggestions = usStates.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(enteredState) > -1
      );
      setSuggestions(filterSuggestions);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }
  };

  const handleClick = (e) => {
    setSuggestions([]);
    setValue(e.target.innerText);
    setSuggestionsActive(false);
  };

  const handleKeyDown = (e) => {
    // UP ARROW
    if (e.keyCode === 38) {
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    }
    // DOWN ARROW
    else if (e.keyCode === 40) {
      if (suggestionIndex - 1 === suggestions.length) {
        return;
      }
      setSuggestionIndex(suggestionIndex + 1);
    }
    // ENTER
    else if (e.keyCode === 13) {
      setValue(suggestions[suggestionIndex]);
      setSuggestionIndex(0);
      setSuggestionsActive(false);
    }
  };

  const Suggestions = () => {
    return (
      <ul className="suggestions">
        {suggestions.map((suggestion, index) => {
          return (
            <li
              className={index === suggestionIndex ? "active" : ""}
              key={index}
              onClick={handleClick}
            >
              {suggestion}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {suggestionsActive && <Suggestions />}
    </div>
  );
  
};

export default StateAutoComplete;
