// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Typical from 'react-typical';

// == Import local
import './style.scss';
import Button from '../LinkButton';

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
              <div className="neon-button-container">
                <Button
                  cssClassName="neon-button neon-button--next"
                  buttonName="Suivant"
                  url="/play/sequence"
                />
                <div className="neon-border-container">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </>
        )
        : (
          <>
            <Typical className="dialog__p" steps={[story.endText, 1000]} wrapper="p" />
            <div className="next-button-container">
              <div className="neon-button-container">
                <Button
                  cssClassName="neon-button neon-button--next"
                  buttonName="Fin"
                  url="/"
                />
                <div className="neon-border-container">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
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
