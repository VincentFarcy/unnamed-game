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
  // gameOn,
  startGame,
  fetchInitialeGameData,
  fetchUserSavedGames,
  saves,
  isConnected,
}) => {
  // https://fr.reactjs.org/docs/hooks-effect.html#example-using-hooks-1
  // voir les useEffect avec nettoyage
  !hasError && useEffect(startGame, []);

  // const handleClick = () => {
  //   fetchInitialeGameData();
  //   fetchUserSavedGames();
  // };

  return (
    hasError ? <ErrorMessage /> : !hasError && (
    // if we have to put this solution in action it will require the creation of the route in App
    // hasError && <Redirect to="/error" />
      <div>
        <section className="game-launcher">
          <NavLink
            exact
            to="/play/create-player"
            className="nav-link play-button game-launcher__btn"
            onClick={fetchInitialeGameData}
          >
            <Image className="play-images" src={newGameIcon} />
            <p className="play-text"> Nouvelle Partie</p>
          </NavLink>
          {
            isConnected !== ""
            && (
              <NavLink
                exact
                to="/play/story"
                className="nav-link play-button game-saved__btn"
                onClick={fetchInitialeGameData}
              >
                <Image className="play-images" src={savedGameIcon} />

                <p className="play-text"> {`Reprendre la sauvegarde : ${saves[0].name}`}</p>
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
  fetchUserSavedGames: PropTypes.func.isRequired,
  isConnected: PropTypes.string.isRequired,
  saves: PropTypes.arrayOf(
    PropTypes.shape({
      sequence: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
      hero: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        gender: PropTypes.string,
        image: PropTypes.string,
      }).isRequired,
      name: PropTypes.string.isRequired,
      agility: PropTypes.number.isRequired,
      constitution: PropTypes.number.isRequired,
      will: PropTypes.number.isRequired,
      intelligence: PropTypes.number.isRequired,
      health: PropTypes.number.isRequired,
      xp: PropTypes.number.isRequired,
      money: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

// == Export
export default MainPlay;
