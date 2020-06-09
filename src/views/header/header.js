import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = ({ label }) => (
  <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>
            <Link to="/" className="header-logo color-pink">{label}</Link>
          </h1>
        </div>
      </div>
    </div>
  </header>
);
Header.propTypes = {
  label: PropTypes.string.isRequired,
};


export default Header;
