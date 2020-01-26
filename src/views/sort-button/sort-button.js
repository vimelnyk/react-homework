
import React from 'react';
import PropTypes from 'prop-types';
import './sort-button.css';

const SortButton = ({ onPress, label }) => (
  <button type="button" onClick={onPress}>
    {label}
  </button>
);
SortButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};


export default SortButton;
