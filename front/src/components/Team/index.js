// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';


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
      <Card className= "team-intro">
        <Card.Img className= "team-intro__img" variant="top" src={logo} />
        <Card.Body>
          <Card.Title className="introduction__title">L'équipe derrière Unnamed.Game</Card.Title>
          <Card.Text className="introduction__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, lectus tempor imperdiet maximus, arcu tortor tincidunt purus, ut consequat tellus risus sed lectus. Donec cursus ex erat, sed feugiat magna ullamcorper sit amet. Suspendisse ultrices metus ac porttitor faucibus. Sed nec metus eget arcu rutrum consectetur. Donec nec justo ac diam facilisis lobortis. Phasellus et nulla mi. 
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
            <h3 className="contentBx__title">Vincent M. | Scrum Master </h3>
            <p className="contentBx__content"> Bla bla bla bla bla blablablabl blablabla Lorem Blabla</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div className="imgBx">
            <img className="imgBx__img" src={VincentM} alt={VincentM} />
          </div>
          <div className="contentBx">
            <h3>Vincent M. | Scrum Master </h3>
            <p> Bla bla bla bla bla blablablabl blablabla Lorem Blabla</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div className="imgBx">
            <img className="imgBx__img" src={VincentM} alt={VincentM} />
          </div>
          <div className="contentBx">
            <h3>Vincent M. | Scrum Master </h3>
            <p> Bla bla bla bla bla blablablabl blablabla Lorem Blabla</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div className="imgBx">
            <img className="imgBx__img" src={VincentM} alt={VincentM} />
          </div>
          <div className="contentBx">
            <h3>Vincent M. | Scrum Master </h3>
            <p> Bla bla bla bla bla blablablabl blablabla Lorem Blabla</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div className="imgBx">
            <img className="imgBx__img" src={VincentM} alt={VincentM} />
          </div>
          <div className="contentBx">
            <h3>Vincent M. | Scrum Master </h3>
            <p> Bla bla bla bla bla blablablabl blablabla Lorem Blabla</p>
          </div>
        </div>
      </div>

    </section>
  </div>

);

// == Props validation

// == Export
export default Team;
