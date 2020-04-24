// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

// == Import local
import './style.scss';

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
    <CardDeck>
    <Card className="team-players__card">
    <Card.Img className="team-players__img" variant="top" src={VincentM} />
    <Card.Body>
      <Card.Title className="team-players__title">Vincent M.</Card.Title>
      <Card.Text className="team-players__text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer className="team-players__footer">
      <small className="text-muted">
        <Button href="https://www.linkedin.com/in/vincent-moulin-10020/" variant="link">LinkedIn</Button>
      </small>
    </Card.Footer>
  </Card>
  <Card className="team-players__card">
    <Card.Img className="team-players__img" variant="top" src={VincentM} />
    <Card.Body>
      <Card.Title className="team-players__title">Vincent M.</Card.Title>
      <Card.Text className="team-players__text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer className="team-players__footer">
      <small className="text-muted">
        <Button href="https://www.linkedin.com/in/vincent-moulin-10020/" variant="link">LinkedIn</Button>
      </small>
    </Card.Footer>
  </Card>
  <Card className="team-players__card">
    <Card.Img className="team-players__img" variant="top" src={VincentM} />
    <Card.Body>
      <Card.Title className="team-players__title">Vincent M.</Card.Title>
      <Card.Text className="team-players__text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer className="team-players__footer">
      <small className="text-muted">
        <Button href="https://www.linkedin.com/in/vincent-moulin-10020/" variant="link">LinkedIn</Button>
      </small>
    </Card.Footer>
  </Card>
  <Card className="team-players__card">
    <Card.Img className="team-players__img" variant="top" src={VincentM} />
    <Card.Body>
      <Card.Title className="team-players__title">Vincent M.</Card.Title>
      <Card.Text className="team-players__text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer className="team-players__footer">
      <small className="text-muted">
        <Button href="https://www.linkedin.com/in/vincent-moulin-10020/" variant="link">LinkedIn</Button>
      </small>
    </Card.Footer>
  </Card>
  <Card className="team-players__card">
    <Card.Img className="team-players__img" variant="top" src={VincentM} />
    <Card.Body>
      <Card.Title className="team-players__title">Vincent M.</Card.Title>
      <Card.Text className="team-players__text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer className="team-players__footer">
      <small className="text-muted">
        <Button href="https://www.linkedin.com/in/vincent-moulin-10020/" variant="link">LinkedIn</Button>
      </small>
    </Card.Footer>
  </Card>
</CardDeck>

    </section>    
  </div>

);

// == Props validation

// == Export
export default Team;
