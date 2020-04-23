// == Import npm
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import Typical from 'react-typical';
// import Button from '../LinkButton';

// == Import local
import './style.scss';
import { rollDice } from '../../func';


// == Component
const Event = ({ playerRoll, eventDifficulty, findEvent }) => {
  useEffect(findEvent, []);
  console.log('event / player');
  console.log(eventDifficulty, playerRoll);


  return (
    <div className="main__play">
      <p className="event__title">Hackaton</p>
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
