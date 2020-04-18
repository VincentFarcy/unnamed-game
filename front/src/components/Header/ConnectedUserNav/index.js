// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import local
import LinkButton from '../../LinkButton';

// == Component
const ConnectedUserNav = ({ pseudo }) => (
  <div className="connected-user">
    <p className="greeting-user">Bienvenue {pseudo}</p>
    {/* TODO : check how to redirect to home page after logout */}
    <LinkButton cssClassName="btn btn-outline-light" buttonName="Se déconnecter" url="/" />
  </div>
);

// == Props validation
ConnectedUserNav.propTypes = {
  pseudo: PropTypes.string.isRequired,
};

// == Export
export default ConnectedUserNav;
