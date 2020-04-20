// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const NotFound = () => (
  <div className="notFound">
    <h1 className="notFound__text">Erreur 404
      <br />Etes-vous sûr de vouloir sortir du programme "LiF3" ?
    </h1>
    <LinkButton
        cssClassName="notFound__button"
        buttonName="Non - Renvoyez-moi à l'accueil !"
        url="/"
    />
  </div>

);

// == Props validation

// == Export
export default NotFound;
