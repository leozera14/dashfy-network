import React from 'react';
import './search-style.css';

export default function SearchBar(props) {

  return (
      <input 
      type="text"
      onChange={props.onChange}
      placeholder='Search for something'
      required={false}
      />             
  )
}