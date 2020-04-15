// == Import npm
import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import PropTypes from 'prop-types';

// == Import local
import LinkButton from '../../LinkButton';

// == Component
const AnonymousUserNav = () => (
  <ButtonGroup className="anonymous-user">
    <LinkButton cssClassName="" buttonName="S'inscrire" />
    <LinkButton cssClassName="" buttonName="Se connecter" />
  </ButtonGroup>
);

// == Props validation

// == Export
export default AnonymousUserNav;
