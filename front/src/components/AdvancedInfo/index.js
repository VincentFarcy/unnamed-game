// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// == Import local
import './style.scss';


// == Component
const AdvancedInfo = ({ abilities, baseToHit, baseAvoid, baseDamage, baseInitiative }) => (
  <div className="AdvancedInfo__container">
    <div className="MainAbilities__container">
      {
        abilities.map((ability) => (
          <span key={uuidv4()}>
          {ability.name}:{ability.value}
          </span>
        ))
      }
    </div>
    <div className="AdvancedAbilities__container">
      <span>Esquive: {baseAvoid}</span>
      <span>Initiative: {baseInitiative + 1} - {baseInitiative + 10}</span>
      <span>Toucher: {baseToHit + 1} - {baseToHit + 6}</span>
      <span>Dégâts: {baseDamage + 1} - {baseDamage + 4}</span>
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
  playerHp: PropTypes.number.isRequired,
  baseToHit: PropTypes.number.isRequired,
  baseAvoid: PropTypes.number.isRequired,
  baseDamage: PropTypes.number.isRequired,
  baseInitiative: PropTypes.number.isRequired,
};


// == Export
export default AdvancedInfo;
