// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';
import Typical from 'react-typical';

// == Import local
import './style.scss';


// == Component
const Story = ({ story }) => (
  <div className="main__play">
    <p className="story__title">{story.title}</p>
    <Typical 
      className="story__p"
      steps={[story.mainText, 1000]}
      wrapper="p"
    />
    {/* <p className="story__p">{story.mainText}</p> */}
    <div className="button__container">
      <Button cssClassName="next__button" buttonName="Suivant" url="/play/reward" />
    </div>
  </div>
);

// == Props validation
Story.propTypes = {
  story: PropTypes.shape({
    title: PropTypes.string.isRequired,
    mainText: PropTypes.string.isRequired,
  }).isRequired,

};


// == Export
export default Story;
