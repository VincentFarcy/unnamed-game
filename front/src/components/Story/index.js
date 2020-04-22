// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Typical from 'react-typical';
import Button from '../LinkButton';

// == Import local
import './style.scss';


// == Component
const Story = ({ story, php }) => (
  <div className="main__play">
    <p className="story__title">{story.title}</p>
    {php === 1
      ? (
        <>
          <Typical className="story__p" steps={[story.mainText, 1000]} wrapper="p" />
          <div className="button__container">
            <Button cssClassName="next__button" buttonName="Suivant" url="/play/event" />
          </div>
        </>
      )
      : (
        <>
          <Typical className="story__p" steps={[story.endText, 1000]} wrapper="p" />
          <div className="button__container">
            <Button cssClassName="next__button" buttonName="Fin" url="/" />
          </div>
        </>
      )}
  </div>
);

// == Props validation
Story.propTypes = {
  story: PropTypes.shape({
    title: PropTypes.string.isRequired,
    mainText: PropTypes.string.isRequired,
    endText: PropTypes.string.isRequired,
  }).isRequired,
  php: PropTypes.number.isRequired,
};


// == Export
export default Story;
