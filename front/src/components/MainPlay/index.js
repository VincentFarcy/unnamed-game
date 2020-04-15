// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';

// == Import local
import './style.scss';
import newGameIcon from '../../assets/images/b_02.png';
import savedGameIcon from '../../assets/images/b_31.png';

// == Component
const MainPlay = () => (
  <div>
    <section className="game-launcher">
      <NavLink exact to="/play/create-player" className="nav-link play-button game-launcher__btn">
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
);

// == Props validation

// == Export
export default MainPlay;
