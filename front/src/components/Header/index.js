// == Import npm
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';
import logo from '../../assets/images/Unnamed_Game_3_white.svg';
import LinkButton from '../LinkButton';
import AnonymousUserNav from './AnonymousUserNav';
import ConnectedUserNav from './ConnectedUserNav';

// == Component
const Header = ({ isLogged, startGame }) => (
  <header className="header">
    {/* https://react-bootstrap.github.io/components/navbar/#navbars-overview */}
    <Navbar expand="lg" variant="dark">
      {/* Logo */}
      <Navbar.Brand>
        <NavLink exact to="/">
          <img src={logo} alt="unnamed game logo" />
        </NavLink>
      </Navbar.Brand>
      {/* Play button */}
      <LinkButton cssClassName="play-button mobile" buttonName="Jouer" url="/play" />
      {/* Burger menu */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* Pages */}
        <Nav className="mr-auto">
          <NavLink exact to="/" className="nav-link">
            Accueil
          </NavLink>
          <NavLink exact to="/rules" className="nav-link">
            Règles générales
          </NavLink>
          <NavLink exact to="/team" className="nav-link">
            Présentation de l'équipe
          </NavLink>
          <NavLink exact to="/acknowledgements" className="nav-link">
            Remerciements
          </NavLink>
        </Nav>
        <div className="auth">
          {/* items to be displayed depending on user's login status */}
          {
            !isLogged && <AnonymousUserNav />
          }
          {
            isLogged && <ConnectedUserNav />
          }
          {/* Play button */}
          <LinkButton
            cssClassName="play-button desktop"
            buttonName="Jouer"
            url="/play"
            onClick={startGame}
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

// == Props validation
Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  startGame: PropTypes.func.isRequired,
};

// == Export
export default Header;
