// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';
import LinkButton from '../LinkButton';

// == Component
const NotFound = ({ changeBg }) => {
  useEffect(() => {
    changeBg('bg--404');
  }, []);
  const handleClick = () => {
    changeBg('');
  };

  return (
    <div className="notFound">
      <h1 className="notFound__text">Erreur 404
        <br />Mettre fin au programme "LiF3" ?
      </h1>
      <LinkButton
        cssClassName="notFound__button"
        buttonName="Non - Renvoyez-moi à l'accueil !"
        url="/"
        onClick={handleClick}
      />
    </div>
  );
};

// == Props validation
NotFound.propTypes = {
  changeBg: PropTypes.func.isRequired,
};


// == Export
export default NotFound;
