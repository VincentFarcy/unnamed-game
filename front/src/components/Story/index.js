// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Typical from 'react-typical';
import Button from '../LinkButton';

// == Import local
import './style.scss';
import Loader from '../Loader';


// == Component
const Story = ({ isLoading, story }) => {
  console.log('story is loading', isLoading);
  return (
    isLoading ? <Loader /> : (
      <div className="main__play">
        <p className="story__title">{story.title}</p>
        <Typical 
          className="story__p"
          steps={[story.mainText, 1000]}
          wrapper="p"
        />
        {/* <p className="story__p">{story.mainText}</p> */}
        <div className="button__container">
          <Button cssClassName="next__button" buttonName="Suivant" url="/play/combat" />
        </div>
      </div>
    )
  )
};

// == Props validation
Story.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  story: PropTypes.shape({
    title: PropTypes.string.isRequired,
    mainText: PropTypes.string.isRequired,
  }).isRequired,

};


// == Export
export default Story;
