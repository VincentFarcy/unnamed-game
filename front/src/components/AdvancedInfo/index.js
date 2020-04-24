// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// == Import local
import './style.scss';


// == Component
const AdvancedInfo = ({ abilities, baseToHit, baseAvoid, baseDamage, baseInitiative, healing }) => (
  <div className="AdvancedInfo__container">
    <div className="MainAbilities__container">
    {/* == Map handling the display of the basic characteristics like Strength, Agility, etc.*/}
      {
        abilities.map((ability) => (
          <span key={uuidv4()}>
            {ability.name} : {ability.value}
          </span>
        ))
      }
    </div>
    <div className="AdvancedAbilities__container">
      <OverlayTrigger
        placement="top"
        delay={{ show: 300, hide: 300 }}
        overlay={
          <Tooltip id={`tooltip`}>
            Si le toucher de votre ennemi est plus grand que votre esquive, ca va piquer...
          </Tooltip>
        }
      >
        <span>Esquive : {baseAvoid}</span>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 300, hide: 300 }}
        overlay={
          <Tooltip id={`tooltip`}>
            Celui qui a la plus grosse, tape avant !
          </Tooltip>
        }
      >
        <span>Initiative : {baseInitiative + 1} - {baseInitiative + 10}</span>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 300, hide: 300 }}
        overlay={
          <Tooltip id={`tooltip`}>
            Opposé à l'esquive de votre ennemi !
          </Tooltip>
        }
      >
        <span>Toucher : {baseToHit + 1} - {baseToHit + 6}</span>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 300, hide: 300 }}
        overlay={
          <Tooltip id={`tooltip`}>
            Si vous avez touché, c'est le nombre de PV que va perdre votre adversaire
          </Tooltip>
        }
      >
        <span>Dégâts : {baseDamage + 1} - {baseDamage + 4}</span>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 300, hide: 300 }}
        overlay={
          <Tooltip id={`tooltip`}>
            Nombre de PV regagné lors d'un repos
          </Tooltip>
        }
      >
        <span>Guérison : {healing}</span>
      </OverlayTrigger>
    </div>
  </div>
);

// == Props validation
AdvancedInfo.propTypes = {
  abilities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
  // playerHp: PropTypes.number.isRequired,
  // baseToHit: PropTypes.number.isRequired,
  // baseAvoid: PropTypes.number.isRequired,
  // baseDamage: PropTypes.number.isRequired,
  // baseInitiative: PropTypes.number.isRequired,
  // healing: PropTypes.number.isRequired, 
};


// == Export
export default AdvancedInfo;
