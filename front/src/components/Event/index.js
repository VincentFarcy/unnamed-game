// == Import npm
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import Typical from 'react-typical';
// import Button from '../LinkButton';

// == Import local
import './style.scss';
import { rollDice } from '../../func';


// == Component
const Event = ({ event, findEvent, strength, agility, will, intelligence }) => {
  console.log(strength, agility, will, intelligence);
  useEffect(findEvent, []);
  const currentEvent = event.mainText;
  const difficultyEvent = rollDice(event.minLevel, event.maxLevel);
  console.log(currentEvent, difficultyEvent);
  const dice = rollDice(1, 6);
  const strengthCheck = strength + dice;
  const agilityCheck = agility + dice;
  const willCheck = will + dice;
  const intelligenceCheck = intelligence + dice;
  console.log(dice, strengthCheck, agilityCheck, willCheck, intelligenceCheck);





  return (
    <div className="main__play">
      <p className="event__title">{event.mainText}</p>
      {/* {php === 1
      ? (
        <>
          <Typical className="story__p" steps={[story.mainText, 1000]} wrapper="p" />
          <div className="button__container">
            <Button cssClassName="next__button" buttonName="Suivant" url="/play/sequence" />
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
      )} */}
    </div>
  );
};

// == Export
export default Event;
