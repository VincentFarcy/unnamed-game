// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

// == Import local
import './style.scss';
import newGameIcon from '../../assets/images/b_02.png';
import savedGameIcon from '../../assets/images/b_31.png';

// == Component
const MainPlay = () => (
  <div>
    <section className="game-launcher">
      <Nav.Link
        as={Button}
        variant="outline-light"
        className="play-button game-launcher__btn"
        href="#"
      >
        <Image className="play-images" src={newGameIcon} />
        <p className="play-text"> Nouvelle Partie</p>
      </Nav.Link>
      <Nav.Link
        as={Button}
        variant="outline-light"
        className="play-button game-launcher__btn"
        href="#"
      >
        <Image className="play-images" src={savedGameIcon} />
        <p className="play-text"> Continuer la partie</p>
      </Nav.Link>
    </section>
  </div>
);

// == Props validation

// == Export
export default MainPlay;
