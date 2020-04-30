// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import local
import LinkButton from '../../LinkButton';

// == Component
const ConnectedUserNav = ({
  pseudo,
  handleLogout,
}) => {
  const handleClick = () => {
    handleLogout();
  };

  return (
    <div className="connected-user">
      <Link
        className="greeting-user"
        to="/user"
      >
        Bienvenue {pseudo}
      </Link>
      <LinkButton
        cssClassName=""
        buttonName="Se deconnecter"
        url="/"
        onClick={handleClick}
      />
    </div>
  );
};

// == Props validation
ConnectedUserNav.propTypes = {
  pseudo: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

// == Export
export default ConnectedUserNav;
