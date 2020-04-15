// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';

// == Component
const Footer = () => (
  <footer className="footer">
    <p className="footer__copyright">&copy; 2020 - Tous droits résérvés</p>
    <a className="footer__link" href="/mentions-legales">Mentions légales</a>
  </footer>
);

// == Props validation

// == Export
export default Footer;
