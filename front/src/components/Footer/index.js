// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';

// == Component
const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <p className="footer__copyright">&copy; 2020 - Tous droits réservés</p>
      <NavLink exact to="/legal-notices" className="nav-link footer__link">
      Mentions légales
      </NavLink>
    </div>
  </footer>
);

// == Props validation

// == Export
export default Footer;
