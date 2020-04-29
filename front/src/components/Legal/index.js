// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { v4 as uuidv4 } from 'uuid';


// == Import local
import './style.scss';
import paragraph from '../../assets/images/b_20.png';
import intro from '../../assets/images/b_19.png';

// == Component
const Legal = ({ legalTitle, introLegal, articles }) => (
  <div>

    <section className="legal">
      <Card className="intro-cards">
        <Card.Img className="intro-cards__img" variant="top" src={intro} />
        <Card.Body>
          <Card.Title className="introduction__title">{legalTitle}</Card.Title>
          <Card.Text className="introduction__content">
            {introLegal}
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
    {
      articles.map((section) => (
        <section key={uuidv4()} className="legal">
          <Card className="intro-cards">
            <Card.Img className="intro-cards__img" variant="top" src={paragraph} />
            <Card.Body>
              <Card.Title className="intro-cards__title">{section.title}</Card.Title>
              <Card.Text>
                {section.content}
              </Card.Text>
            </Card.Body>
          </Card>
        </section>
      ))
    }
  </div>
);

// == Props validation
Legal.propTypes = {
  legalTitle: PropTypes.string.isRequired,
  introLegal: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};


// == Export
export default Legal;
