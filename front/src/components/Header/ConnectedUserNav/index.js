// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import local

// == Component
const ConnectedUserNav = () => (
  <div className="connected-user">
    <p className="greeting-user">Bienvenue Player</p>
    <a className="btn btn-outline-light" href="#" role="button">Se déconnecter</a>
  </div>
);

// == Props validation

// == Export
export default ConnectedUserNav;
