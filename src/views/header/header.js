
import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const Header = ({ label }) => (
  <header>
    {label}
  </header>
);
Header.propTypes = {
  label: PropTypes.string.isRequired,
};


export default Header;
