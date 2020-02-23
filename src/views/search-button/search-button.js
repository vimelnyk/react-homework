
import React from 'react';
import PropTypes from 'prop-types';
import './search-button.css';

const SearchButton = ({
  onPress, label, value,
}) => (
  <button type="button" onClick={onPress} value={value}>
    {label}
  </button>
);
SearchButton.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};


export default SearchButton;
