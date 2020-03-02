
import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const Header = ({ label }) => (
  <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>
            <a href="/" className="header-logo color-pink">
              {label}
            </a>
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
