
import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';

const Footer = ({ label }) => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>
            <a href="/" className="footer-logo color-pink">
              {label}
            </a>
          </h1>
        </div>
      </div>
    </div>
  </footer>
);
Footer.propTypes = {
  label: PropTypes.string.isRequired,
};


export default Footer;
