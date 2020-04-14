// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';


// == Import local
import './style.scss';
import warning from '../../assets/images/r_36.png';
import intro from '../../assets/images/b_04.png';

// == Component
const MainSite = () => (
  <div>
    <main className="mainsite">
      <section className="start-game">
        <Nav.Link
          as={Button}
          variant="outline-light"
          className="play-button"
          href="#"
        >
          Jouer
        </Nav.Link>
      </section>
      <section className="introduction">
        <Card style={{ width: '90%' }}>
          <Card.Img className="intro-image" variant="top" src={intro} />
          <Card.Body>
            <Card.Title className="introduction__title">Unnamed Game</Card.Title>
            <Card.Text className="introduction__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dignissimos, voluptatibus distinctio recusandae incidunt eligendi quas itaque maxime modi ut quia vitae omnis eum perferendis provident magni id aliquid consequuntur deleniti? Soluta vel quis facere suscipit mollitia ea quam consequuntur itaque. Voluptate, ducimus ratione dolores quae deleniti aut pariatur commodi expedita officia nemo eveniet, debitis, corporis asperiores. Dignissimos eligendi nemo nulla? Quasi quibusdam dignissimos optio laboriosam, iste consequuntur quisquam laborum, ullam sunt rem minus autem nostrum doloribus dolores atque voluptas. At corporis illo reiciendis ut odit, totam natus suscipit nobis, veniam itaque iste sed voluptatum tempore dolor, quo fuga consequuntur harum ipsam.
            </Card.Text>
          </Card.Body>
        </Card>

      </section>
      <section className="warning">
        <Card style={{ width: '90%' }}>
          <Card.Img variant="top" src={warning} />
          <Card.Body>
            <Card.Title>Avertissement au public</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dignissimos, voluptatibus distinctio recusandae incidunt eligendi quas itaque maxime modi ut quia vitae omnis eum perferendis provident magni id aliquid consequuntur deleniti.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* <h2 className="public-warning__title">Avertissement au public</h2>
       <p className="public-warning__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dignissimos, voluptatibus distinctio recusandae incidunt eligendi quas itaque maxime modi ut quia vitae omnis eum perferendis provident magni id aliquid consequuntur deleniti.</p> */}
      </section>
    </main>
  </div>
);

// == Props validation

// == Export
export default MainSite;
