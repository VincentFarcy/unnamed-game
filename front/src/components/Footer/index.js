// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';

// == Import local
import './style.scss';
import backgroundMusic from '../../assets/audio/Whitesand-Drops.mp3';

// == Component
const Footer = ({ gameOn }) => (
  <footer className="footer">
    <div className="footer-container">
      <p className="footer__copyright">&copy; 2020 - Tous droits réservés</p>
      <NavLink exact to="/legal-notices" className="nav-link footer__link">
        Mentions légales
      </NavLink>
      {
        gameOn && (
          <ReactAudioPlayer
            src={backgroundMusic}
            autoPlay
            controls
            className="audioplayer"
            loop
            title="Drops from Whitesand"
            volume={0.4}
          />
        )
      }
    </div>
  </footer>
);

// == Props validation
Footer.propTypes = {
  gameOn: PropTypes.bool.isRequired,
};

// == Export
export default Footer;
