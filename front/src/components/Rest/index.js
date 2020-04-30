// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const Rest = ({ actionRest }) => (
  <div className="dialog">
    <h2 className="dialog__title">Vous décidez de vous reposer</h2>
    <p className="dialog__p">Vous restez tout de même sur vos gardes, il y a de nombreux bruits étranges sur le vaisseau... au loin vous pensez entendre une porte s'ouvrir... plus le temps passe plus vous avez l'impression de devenir fou ici. Vous avez récupéré quelques points de vies grâce à ce repos. Seulement, le temps passe et cela ne joue pas en votre faveur.</p>
    <div className="next-button-container">
      <div className="neon-button-container">
        <Button cssClassName="neon-button neon-button--next" buttonName="Se reposer" url="/play/sequence" onClick={actionRest} />
        <div className="neon-border-container">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
    <div className="next-button-container">
      <div className="neon-button-container">
        <Button cssClassName="neon-button neon-button--next" buttonName="Sortir" url="/play/mainhub" />
        <div className="neon-border-container">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  </div>
);

// == Props validation
Rest.propTypes = {
  actionRest: PropTypes.func.isRequired,
};


// == Export
export default Rest;
