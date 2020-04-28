// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArtstation } from '@fortawesome/free-brands-svg-icons';

// == Import local
import './style.scss';

// == Image Import
import logo from '../../assets/images/Unnamed_Game_3_white.svg';

// == Component
const Acknowledgements = ({ artists, changeBg }) => {
  useEffect(() => {
    changeBg('bg--thanks');
  }, []);
  return (
    <div className="thanks-container">
      <section>
        <Card className="thanks-intro">
          <Card.Img className="thanks-intro__img" variant="top" src={logo} />
          <Card.Body className="thanks-intro__body">
            <Card.Title className="thanks-intro__title">Remerciements particuliers</Card.Title>
            <Card.Text className="thanks-intro__content">
            Merci aux trois artistes qui nous ont permis d'utiliser leurs visuels fantastiques pour ce projet de fin d'études !
            Vous trouverez plus d'informations sur leur travail formidable en suivant les liens sur leurs photos.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>

      <section className="thanks-players">

        {
          artists.map((artist) => (
            <div className="container" key={artist.id}>
              <div className="box">
                <div className="imgBx">
                  <img className="imgBx__img" src={artist.img} alt={artist.name} />
                </div>
                <div className="contentBx">
                  <h3 className="contentBx__title1">{artist.name} </h3>
                  <h3 className="contentBx__title2">{artist.title} </h3>
                  <p className="contentBx__content">{artist.location}</p>
                  <FontAwesomeIcon icon={faArtstation} size="lg" /><a target="_blank" rel="noopener noreferrer" className="contentBx__link" href={artist.artStation} alt={`ArtStation ${artist.name}`}>ArtStation</a>
                </div>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  );
};

// == Props validation

Acknowledgements.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      artStation: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  changeBg: PropTypes.func.isRequired,
};


// == Export
export default Acknowledgements;
