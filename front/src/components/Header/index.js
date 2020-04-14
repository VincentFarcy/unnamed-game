// == Import npm
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';
import logo from '../../assets/images/Unnamed_Game_3_white.svg'
import LinkButton from '../LinkButton';

// == Component
const Header = () => (
  <header className="header">
    {/* https://react-bootstrap.github.io/components/navbar/#navbars-overview */}
    <Navbar expand="lg" variant="dark">
      {/* Logo */}
      <Navbar.Brand href="/">
        <img src={logo} alt="unnamed game logo" />
      </Navbar.Brand>
      {/* Play button */}
      <LinkButton cssClassName="play-button" buttonName="Jouer" />
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
        {/* items to be displayed depending on user's login status */}
        {/* https://react-bootstrap.github.io/components/buttons/ 
        https://react-bootstrap.github.io/components/buttons/#button-props*/}
      </Navbar.Collapse>
    </Navbar>
  </header>
);

// == Props validation

// == Export
export default Header;
