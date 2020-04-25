// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faLinkedin } from '@fortawesome/free-brands-svg-icons';



// == Import local
import './style.scss';
import '../../vanilla-tilt';

// == Team Images Import
import VincentM from '../../assets/images/team/VincentM.jpg';
import logo from '../../assets/images/Unnamed_Game_3_white.svg';

// == Component
const Team = () => (

  <div>
    <section>
      <Card className="team-intro">
        <Card.Img className="team-intro__img" variant="top" src={logo} />
        <Card.Body className="team-intro__body">
          <Card.Title className="team-intro__title">L'équipe derrière Unnamed.Game</Card.Title>
          <Card.Text className="team-intro__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, lectus tempor imperdiet maximus, arcu tortor tincidunt purus, ut consequat tellus risus sed lectus.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>

    <section className="team-players">


      <div className="container">
        <div className="box">
          <div className="imgBx">
            <img className="imgBx__img" src={VincentM} alt={VincentM} />
          </div>
          <div className="contentBx">
            <h3 className="contentBx__title1">Vincent Moulin </h3>
            <h3 className="contentBx__title2">Scrum Master | React Dev </h3>
            <p className="contentBx__content"> Bla bla bla bla bla blablablabl blablabla Lorem Blabla</p>
            <FontAwesomeIcon icon={faLinkedin} size="lg" /><a className="contentBx__link" href="https://www.linkedin.com/in/vincent-moulin-10020/" alt="linkedIn Vincent Moulin">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div className="imgBx">
            <img className="imgBx__img" src={VincentM} alt={VincentM} />
          </div>
          <div className="contentBx">
            <h3 className="contentBx__title1">Vincent Moulin </h3>
            <h3 className="contentBx__title2">Scrum Master | React Dev </h3>
            <p className="contentBx__content"> Bla bla bla bla bla blablablabl blablabla Lorem Blabla</p>
            <FontAwesomeIcon icon={faLinkedin} size="lg" /><a className="contentBx__link" href="https://www.linkedin.com/in/vincent-moulin-10020/" alt="linkedIn Vincent Moulin">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div className="imgBx">
            <img className="imgBx__img" src={VincentM} alt={VincentM} />
          </div>
          <div className="contentBx">
            <h3 className="contentBx__title1">Vincent Moulin </h3>
            <h3 className="contentBx__title2">Scrum Master | React Dev </h3>
            <p className="contentBx__content"> Bla bla bla bla bla blablablabl blablabla Lorem Blabla</p>
            <FontAwesomeIcon icon={faLinkedin} size="lg" /><a className="contentBx__link" href="https://www.linkedin.com/in/vincent-moulin-10020/" alt="linkedIn Vincent Moulin">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div className="imgBx">
            <img className="imgBx__img" src={VincentM} alt={VincentM} />
          </div>
          <div className="contentBx">
            <h3 className="contentBx__title1">Vincent Moulin </h3>
            <h3 className="contentBx__title2">Scrum Master | React Dev </h3>
            <p className="contentBx__content"> Bla bla bla bla bla blablablabl blablabla Lorem Blabla</p>
            <FontAwesomeIcon icon={faLinkedin} size="lg" /><a className="contentBx__link" href="https://www.linkedin.com/in/vincent-moulin-10020/" alt="linkedIn Vincent Moulin">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div className="imgBx">
            <img className="imgBx__img" src={VincentM} alt={VincentM} />
          </div>
          <div className="contentBx">
            <h3 className="contentBx__title1">Vincent Moulin </h3>
            <h3 className="contentBx__title2">Scrum Master | React Dev </h3>
            <p className="contentBx__content"> Bla bla bla bla bla blablablabl blablabla Lorem Blabla</p>
            <FontAwesomeIcon icon={faLinkedin} size="lg" /><a className="contentBx__link" href="https://www.linkedin.com/in/vincent-moulin-10020/" alt="linkedIn Vincent Moulin">LinkedIn</a>
          </div>
        </div>
      </div>

    </section>
  </div>

);

// == Props validation

// == Export
export default Team;
