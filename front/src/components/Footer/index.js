// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';

// == Import local
import './style.scss';
import backgroundMusic from '../../assets/audio/Whitesand-Drops.mp3';

// == Component
const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <p className="footer__copyright">&copy; 2020 - Tous droits réservés</p>
      <NavLink exact to="/legal-notices" className="nav-link footer__link">
      Mentions légales
      </NavLink>
      <ReactAudioPlayer
        src={backgroundMusic}
        autoPlay
        controls
        className="audioplayer"
        loop
        title="Drops from Whitesand"
      />
    </div>
  </footer>
);

// == Props validation

// == Export
export default Footer;



