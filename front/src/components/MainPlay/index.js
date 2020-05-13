// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';


// == Import local
import './style.scss';
import rulesIcon from '../../assets/images/b_18.png';
import newGameIcon from '../../assets/images/b_02.png';
import savedGameIcon from '../../assets/images/b_31.png';
import ErrorMessage from '../../containers/ErrorMessage';


// == Component
const MainPlay = ({
  hasError,
  hasBackup,
  startGame,
  fetchInitialeGameData,
  startBackupLoading,
  restartMusic,
}) => {
  !hasError && useEffect(startGame, []);

  const handleStopMusic = () => {
    restartMusic();
  };

  const handleContinueClick = () => {
    fetchInitialeGameData();
    startBackupLoading();
  };

  return (
    hasError ? <ErrorMessage /> : (

      <div>
        <section className="game-launcher">
          <NavLink
            exact
            to="/rules"
            className="nav-link generic-button game-launcher__btn"
            onClick={handleStopMusic}
          >
            <Image className="play-images" src={rulesIcon} />
            <p className="play-text"> Les règles de jeu</p>
          </NavLink>
          <NavLink
            exact
            to="/play/create-player"
            className="nav-link generic-button game-launcher__btn"
            onClick={fetchInitialeGameData}
          >
            <Image className="play-images" src={newGameIcon} />
            <p className="play-text"> Nouvelle Partie</p>
          </NavLink>
          {
            hasBackup && (
              <NavLink
                exact
                to="/play/create-player"
                className="nav-link generic-button game-launcher__btn"
                onClick={handleContinueClick}
              >
                <Image className="play-images" src={savedGameIcon} />
                <p className="play-text">Continuer la partie</p>
              </NavLink>
            )
          }
        </section>
      </div>
    )
  );
};

// == Props validation
MainPlay.propTypes = {
  hasError: PropTypes.bool.isRequired,
  hasBackup: PropTypes.bool.isRequired,
  startGame: PropTypes.func.isRequired,
  fetchInitialeGameData: PropTypes.func.isRequired,
  startBackupLoading: PropTypes.func.isRequired,
  restartMusic: PropTypes.func.isRequired,
};

// == Export
export default MainPlay;
