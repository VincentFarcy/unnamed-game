// == Import npm
import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// == Import local
import LinkButton from '../../LinkButton';

// == Component
const AnonymousUserNav = () => (
  <ButtonGroup className="anonymous-user">
    <LinkButton cssClassName="" buttonName="S'inscrire" url="/sign-up" />
    <LinkButton cssClassName="" buttonName="Se connecter" url="/sign-in" />
  </ButtonGroup>
);

// == Props validation

// == Export
export default AnonymousUserNav;
