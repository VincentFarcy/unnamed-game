// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const Rest = ({ actionRest }) => (
  <div className="main__play">
    <p className="rest__title">Vous décidez de vous reposer</p>
    <p className="rest__texte">Vous restez tout de même sur vos gardes, il y a de nombreux bruits étranges sur le vaisseau... au loin vous pensez attendre une porte s'ouvrir... plus le temps passe plus vous avez l'impression de devenir fou ici. Vous avez récupérez quelques points de vies grâce à ce repos. Seulement le temps passe, et cela ne joue pas en votre faveur.</p>
    <div className="button__container">
      <Button cssClassName="next__button" buttonName="Se reposer" url="/play/sequence" onClick={actionRest} />
    </div>
    <div className="button__container">
      <Button cssClassName="next__button" buttonName="Sortir" url="/play/mainhub" />
    </div>
  </div>
);

// == Props validation
Rest.propTypes = {
  actionRest: PropTypes.func.isRequired,
};


// == Export
export default Rest;
