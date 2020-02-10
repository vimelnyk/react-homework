import React from 'react';
import './search-panel.css';

const SearchPanel = () => (
  <label htmlFor="search">
    Search panel
    <input name="search" placeholder="Search film..." />
  </label>
);

export default SearchPanel;
