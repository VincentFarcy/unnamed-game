// == Import npm
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';
import logo from '../../assets/images/Unnamed_Game_3_white.svg'
import LinkButton from '../LinkButton';
import AnonymousUserNav from './AnonymousUserNav';
import ConnectedUserNav from './ConnectedUserNav';

// == Component
const Header = ({ isLogged }) => (
  <header className="header">
    {/* https://react-bootstrap.github.io/components/navbar/#navbars-overview */}
    <Navbar bg="dark" expand="lg" variant="dark">
      {/* Logo */}
      <Navbar.Brand href="/">
        <img src={logo} alt="unnamed game logo" />
      </Navbar.Brand>
      {/* Play button */}
      <LinkButton cssClassName="play-button mobile" buttonName="Jouer" />
      {/* Burger menu */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* Pages */}
        <Nav className="mr-auto">
          <Nav.Link href="/">Accueil</Nav.Link>
          <Nav.Link href="#">Règles générales</Nav.Link>
          <Nav.Link href="#">Présentation de l'équipe</Nav.Link>
          <Nav.Link href="#">Remerciements</Nav.Link>
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
          <LinkButton cssClassName="play-button desktop" buttonName="Jouer" />
        </div>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

// == Props validation
Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
}

// == Export
export default Header;
