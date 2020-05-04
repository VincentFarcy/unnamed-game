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
import ConnectedUserNav from '../../containers/Header/ConnectedUserNav';

// == Component
const Header = ({
  isLogged,
  isExpanded,
  initUserState,
  toggleMenu,
  changeBg,
  restartMusic,
}) => {
  //
  const handleClick = (evt) => {
    if (evt.target.tagName === 'A' || evt.target.tagName === 'BUTTON' || evt.target.tagName === 'IMG') {
      initUserState();
      toggleMenu(false);
      changeBg('');
      restartMusic();
    }
  };

  const handleToggleMenu = () => {
    toggleMenu(!isExpanded);
  };

  // Close mobile menu on window resize
  const onWindowResize = () => {
    toggleMenu(false);
  };
  window.addEventListener('resize', onWindowResize);

  return (
    <header className="header" onClick={handleClick}>
      <div className={(isExpanded) ? 'nav-container nav-container--expanded' : 'nav-container'}>
        {/* https://react-bootstrap.github.io/components/navbar/#navbars-overview */}
        <Navbar expand="lg" variant="dark" expanded={isExpanded}>
          <div className="mobile-header-container">
            {/* Logo */}
            <Navbar.Brand>
              <NavLink exact to="/">
                <img src={logo} alt="unnamed game logo" />
              </NavLink>
            </Navbar.Brand>
            {/* Play button */}
            <LinkButton
              cssClassName="play-button mobile"
              buttonName="Jouer"
              url="/play"
            />
            {/* Burger menu */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggleMenu} />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Pages */}
            <Nav className="mr-auto">
              <NavLink exact to="/" className="nav-link nav-link--home">
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
              />
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

// == Props validation
Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  initUserState: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  changeBg: PropTypes.func.isRequired,
  restartMusic: PropTypes.func.isRequired,
};

// == Export
export default Header;
