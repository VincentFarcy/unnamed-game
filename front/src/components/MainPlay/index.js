// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import { NavLink, Redirect } from 'react-router-dom';

// == Import local
import './style.scss';
import newGameIcon from '../../assets/images/b_02.png';
import savedGameIcon from '../../assets/images/b_31.png';
import ErrorMessage from '../../containers/ErrorMessage';

// == Component
const MainPlay = ({
  hasError,
  gameOn,
  startGame,
  fetchInitialeGameData 
}) => {
  // https://fr.reactjs.org/docs/hooks-effect.html#example-using-hooks-1
  // voir les useEffect avec nettoyage
  !hasError && useEffect(startGame, []);
  // console.log(hasError);

  return ( 
    hasError && <ErrorMessage />
    // if we have to put this solution in action it will require the creation of the route in App
    // hasError && <Redirect to="/error" />
    ||
    !hasError &&
    (
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
        {/* NOT DISPLAY - MVP without backup
        <NavLink exact to="/play/story" className="nav-link play-button game-launcher__btn">
          <Image className="play-images" src={savedGameIcon} />
          <p className="play-text"> Continuer la partie</p>
        </NavLink> */}
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
};

// == Export
export default MainPlay;
