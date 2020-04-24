// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import LinkButton from '../LinkButton';


// == Import local
import './style.scss';
import Loader from '../Loader';
import Ability from '../../containers/CreateCharacter/Ability';

// == Component
const CreateCharacter = ({
  changeBg,
  isLoading,
  abilities,
  pool,
}) => {
  useEffect(() => {
    changeBg('bg--create');
  }, []);
  const handleClick = () => {
    changeBg('');
  };
  return (
    isLoading && <Loader />
  || !isLoading &&
    (
    <div className="create-character-container">
      <div className="main__play">
        <div className="title__container">
          <h2 className="create__title">Création de personnage</h2>
        </div>
        <div className="ability_main__container">
          <div className="ability_pool__container">
            <p className="ability_pool__text">A répartir<span className="ability_pool__value">{pool}</span></p>
          </div>
          {
            abilities.map((ability) => (
              <Ability key={uuidv4()} {...ability} />
            ))
          }
          <div className="button__container">
            { (pool == 0) && <LinkButton cssClassName="generic-button validate__button" buttonName="Valider" url="/play/story" onClick={handleClick} /> }
          </div>
        </div>
      </div>
    </div>
    )
  );
};

// == Props validation
CreateCharacter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  abilities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
  pool: PropTypes.number.isRequired,
  changeBg: PropTypes.func.isRequired,
};


// == Export
export default CreateCharacter;
