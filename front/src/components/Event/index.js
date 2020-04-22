// == Import npm
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import Typical from 'react-typical';
// import Button from '../LinkButton';

// == Import local
import './style.scss';


// == Component
const Event = ({ event, findEvent }) => {
  console.log(event);
  useEffect(findEvent, []);
  return (
    <div className="main__play">
      <p className="story__title">{event.mainText}</p>
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

// == Props validation
Event.propTypes = {
};


// == Export
export default Event;
