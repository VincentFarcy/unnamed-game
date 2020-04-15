// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import local
import LinkButton from '../../LinkButton';

// == Component
const ConnectedUserNav = () => (
  <div className="connected-user">
    <p className="greeting-user">Bienvenue Player</p>
    {/* TODO : check how to redirect to home page after logout */}
    <LinkButton cssClassName="btn btn-outline-light" buttonName="Se déconnecter" url="/" />
  </div>
);

// == Props validation

// == Export
export default ConnectedUserNav;
