// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faLink } from '@fortawesome/free-solid-svg-icons';

// == Import local
import './style.scss';

// == Image Import
import logo from '../../assets/images/r_39.png';
import oclock from '../../assets/images/logo_oclock.jpg';

// == Component
const Acknowledgements = ({ artists, changeBg }) => {
  useEffect(() => {
    changeBg('bg--thanks');
  }, []);

  return (
    <div className="site-container">
      <section>
        <Card className="site-intro">
          <Card.Img className="site-intro__img" variant="top" src={oclock} />
          <Card.Body className="site-intro__body">
            <Card.Title className="site-intro__title">Remerciements</Card.Title>
            <Card.Text className="site-intro__content">
            L'équipe tient à remercier l'ensemble des membres de leur famille qui les ont soutenu
            pendant ces 5 derniers mois de formation intensive.
            Nous tenons également à remercier tous les membres de l'équipe <a className="teamLink" target="_blank" rel="noopener noreferrer" href="https://oclock.io" alt="Ecole O'clock">O'clock</a> et plus particulièrement nos professeurs et référents de formation et d'admission des promotions Asgard et Y !
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
      <section>
        <Card className="site-intro">
          <Card.Img className="site-intro__img" variant="top" src={logo} />
          <Card.Body className="site-intro__body">
            <Card.Title className="site-intro__title">Remerciements particuliers</Card.Title>
            <Card.Text className="site-intro__content">
              Merci aux quatre artistes qui nous ont permis d'utiliser leurs visuels et musiques
              fantastiquespour ce projet de fin d'études !
              Vous trouverez plus d'informations sur leur travail formidable
              en suivant les liens sur leurs photos.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>

      <section className="site-players">
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
                  <div className="contentBx__content">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                    <p className="contentBx__content-p">{artist.location}</p>
                  </div>
                  <FontAwesomeIcon
                    icon={faLink}
                    size="lg"
                  />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contentBx__link"
                    href={artist.artStation}
                    alt={`Page de l'artiste ${artist.name}`}
                  >
                    Page de l'artiste
                  </a>
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
