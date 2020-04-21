// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


// == Import local
import './style.scss';

// == Component
const RessourceInfo = ({ mainCounter, experience, money }) => (
  <div className="ressource-info__container">
    <OverlayTrigger
      placement="top"
      delay={{ show: 300, hide: 300 }}
      overlay={
        <Tooltip id={`tooltip`}>
          Le temps passe...
          </Tooltip>
      }
    >
      <p className="ressource-info__counter"> {`PHP:${mainCounter}`} </p>
    </OverlayTrigger>
    <OverlayTrigger
      placement="top"
      delay={{ show: 300, hide: 300 }}
      overlay={
        <Tooltip id={`tooltip`}>
          C'est en forgeant tout ça, tout ça...
          </Tooltip>
      }
    >
      <p className="ressource-info__experience"> {`XP:${experience}`} </p>
    </OverlayTrigger>
    <OverlayTrigger
      placement="top"
      delay={{ show: 300, hide: 300 }}
      overlay={
        <Tooltip id={`tooltip`}>
          ARGENT ! J'en veux plus !
          </Tooltip>
      }
    >
      <p className="ressource-info__money"> {`JSX:${money}`} </p>
    </OverlayTrigger>
  </div>
);

// == Props validation
RessourceInfo.propTypes = {
  mainCounter: PropTypes.number.isRequired,
  experience: PropTypes.number.isRequired,
  money: PropTypes.number.isRequired,
};

// == Export
export default RessourceInfo;