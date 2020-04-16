// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';


// == Import local
import './style.scss';


// == Component
const Story = ({ story }) => (
  <div className="main__play">
    <p className="story__title">{story.title}</p>
    <p className="story__p">{story.mainText}</p>
    <div className="button__container">
      <Button cssClassName="next__button" buttonName="Suivant" />
    </div>
  </div>
);

// == Props validation
Story.propTypes = {
  story: PropTypes.string.isRequired,
};


// == Export
export default Story;
