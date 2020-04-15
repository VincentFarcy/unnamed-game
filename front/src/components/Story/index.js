// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';


// == Import local
import './style.scss';


// == Component
const Story = ({ Chapter }) => (
  <div className="main__play">
    <p className="story__p">{Chapter}</p>
    <div className="button__container">
      <Button cssClassName="next__button" buttonName="Suivant"></Button>
    </div>
  </div>
);

// == Props validation
Story.propTypes = {
  chapter: PropTypes.string.isRequired,
};


// == Export
export default Story;
