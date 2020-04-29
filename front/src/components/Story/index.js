// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Typical from 'react-typical';
import Button from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const Story = ({ story, php }) => (
  <div className="story-container">
    <div className="dialog">
      <h2 className="dialog__title">{story.title}</h2>
      {php === 1
        ? (
          <>
            <Typical className="dialog__p" steps={[story.mainText, 1000]} wrapper="p" />
            <div className="next-button-container">
              <Button cssClassName="generic-button next-button" buttonName="Suivant" url="/play/sequence" />
            </div>
          </>
        )
        : (
          <>
            <Typical className="dialog__p" steps={[story.endText, 1000]} wrapper="p" />
            <div className="next-button-container">
              <Button
                cssClassName="generic-button next-button"
                buttonName="Fin"
                url="/"
              />
            </div>
          </>
        )}
    </div>
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
