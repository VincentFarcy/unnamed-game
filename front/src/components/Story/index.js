// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';


// == Import local
import './style.scss';


// == Component
const Story = ({ Chapter }) => (
  <div>
  <p class="story_p">{Chapter}</p>
  <Button cssClassName="next_button" buttonName="Suivant"></Button>
  </div>
);

// == Props validation
Story.propTypes = {
  chapter: PropTypes.string.isRequired,
};


// == Export
export default Story;
