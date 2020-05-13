// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Typical from 'react-typical';

// == Import local
import './style.scss';
import LinkButton from '../LinkButton';
import Loader from '../Loader';
import Ability from '../../containers/CreateCharacter/Ability';

// == Component
const CreateCharacter = ({
  isLoading,
  abilities,
  pool,
  backupIsLoading,
  changeBg,
  endBackupLoading,
}) => {
  useEffect(() => {
    changeBg('bg--create');
  }, []);
  const handleClick = () => {
    changeBg('');
    if (backupIsLoading) {
      endBackupLoading();
    }
  };
  return (
    isLoading ? <Loader />
      : (
        <div className="create-character-container">
          {!backupIsLoading ? (
            <div className="dialog dialog--create">
              <div>
                <div className="title__container">
                  <h2 className="dialog__title">Création de personnage</h2>
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
                    { (pool === 0) && (
                      <div className="next-button-container">
                        <div className="neon-button-container">
                          <LinkButton
                            cssClassName="neon-button neon-button--next"
                            buttonName="Valider"
                            url="/play/story"
                            onClick={handleClick}
                          />
                          <div className="neon-border-container">
                            <span />
                            <span />
                            <span />
                            <span />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="dialog dialog--continue">
              <div>
                <div className="title__container">
                  <h2 className="dialog__title">Sauvegarde chargée</h2>
                </div>
                <div className="continue_main__container">
                  <Typical className="dialog__p" steps={['Prêt à reprendre l\'aventure ?', 1000]} wrapper="p" />
                  <div className="next-button-container">
                    <div className="neon-button-container">
                      <LinkButton
                        cssClassName="neon-button neon-button--next"
                        buttonName="OK"
                        url="/play/sequence"
                        onClick={handleClick}
                      />
                      <div className="neon-border-container">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
  backupIsLoading: PropTypes.bool.isRequired,
  changeBg: PropTypes.func.isRequired,
  endBackupLoading: PropTypes.func.isRequired,
};


// == Export
export default CreateCharacter;
