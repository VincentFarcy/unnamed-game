// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';

// == Import local
import './style.scss';
import newGameIcon from '../../assets/images/b_02.png';
import savedGameIcon from '../../assets/images/b_31.png';
import ErrorMessage from '../../containers/ErrorMessage';

// == Component
const MainPlay = ({
  hasError,
  startGame,
  fetchInitialeGameData,
  hasBackup,
  startBackupLoading,
}) => {
  !hasError && useEffect(startGame, []);

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
  startGame: PropTypes.func.isRequired,
  fetchInitialeGameData: PropTypes.func.isRequired,
  hasBackup: PropTypes.bool.isRequired,
  startBackupLoading: PropTypes.func.isRequired,
};

// == Export
export default MainPlay;
