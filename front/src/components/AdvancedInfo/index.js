// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// == Import local
import './style.scss';
// == Import : assets
import Damage from 'src/assets/images/damage.png';
import Dodge from 'src/assets/images/dodge.png';
import Hacking from 'src/assets/images/hacking.png';
import Healing from 'src/assets/images/healing.png';
import Initiative from 'src/assets/images/initiative.png';
import Touch from 'src/assets/images/touch.png';

// == Component
const AdvancedInfo = ({
  abilities,
  baseToHit,
  baseAvoid,
  baseDamage,
  baseInitiative,
  healing,
  hacking,
}) => (
  <div className="AdvancedInfo__container">
    <div className="MainAbilities__container">
      {/* == Map handling the display of the basic characteristics like Strength, Agility, etc. */ }
      {
        abilities.map((ability) => (
          <div key={uuidv4()}>
            <img className="MainAbilities__image" src={ability.image} alt={ability.name} />
            <span className="MainAbilities__name">{ability.name}</span>
            <span className="MainAbilities__value">{ability.value}</span>
          </div>
        ))
      }
    </div>
    <div className="AdvancedAbilities__container">
      <OverlayTrigger
        placement="top"
        delay={{ show: 300, hide: 300 }}
        trigger={['hover', 'focus']}
        overlay={
          (
            <Tooltip id="tooltip">
              Opposé au touché de votre ennemi !
            </Tooltip>
          )
        }
      >
        <div>
          <img className="AdvancedAbilities__image" src={Dodge} alt="Esquive" />
          <span className="AdvancedAbilities__name">Esquive</span>
          <span className="AdvancedAbilities__value">{baseAvoid}</span>
        </div>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 300, hide: 300 }}
        overlay={
          (
            <Tooltip id="tooltip">
              Celui qui a la plus grosse, tape avant !
            </Tooltip>
          )
        }
      >
        <div>
          <img className="AdvancedAbilities__image" src={Initiative} alt="Initiative" />
          <span className="AdvancedAbilities__name">Initiative</span>
          <span className="AdvancedAbilities__value">{baseInitiative + 1}-{baseInitiative + 10}</span>
        </div>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 300, hide: 300 }}
        overlay={
          (
            <Tooltip id="tooltip">
              Opposé à l'esquive de votre ennemi !
            </Tooltip>
          )
        }
      >
        <div>
          <img className="AdvancedAbilities__image" src={Touch} alt="Toucher" />
          <span className="AdvancedAbilities__name">Toucher</span>
          <span className="AdvancedAbilities__value">{baseToHit + 1}-{baseToHit + 6}</span>
        </div>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 300, hide: 300 }}
        overlay={
          (
            <Tooltip id="tooltip">
              Si vous avez touché, c'est le nombre de PV que va perdre votre adversaire
            </Tooltip>
          )
        }
      >
        <div>
          <img className="AdvancedAbilities__image" src={Damage} alt="Dégâts" />
          <span className="AdvancedAbilities__name">Dégâts</span>
          <span className="AdvancedAbilities__value">{baseDamage + 1}-{baseDamage + 4}</span>
        </div>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 300, hide: 300 }}
        overlay={
          (
            <Tooltip id="tooltip">
              Nombre de PV regagné lors d'un repos
            </Tooltip>
          )
        }
      >
        <div>
          <img className="AdvancedAbilities__image" src={Healing} alt="Guérison" />
          <span className="AdvancedAbilities__name">Guérison</span>
          <span className="AdvancedAbilities__value">{healing}</span>
        </div>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        delay={{ show: 300, hide: 300 }}
        trigger={['hover', 'focus']}
        overlay={
          (
            <Tooltip id="tooltip">
              Capacité à pirater les portes
            </Tooltip>
          )
        }
      >
        <div>
          <img className="AdvancedAbilities__image" src={Hacking} alt="Piratage" />
          <span className="AdvancedAbilities__name">Piratage</span>
          <span className="AdvancedAbilities__value">{hacking}</span>
        </div>
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
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
  baseToHit: PropTypes.number.isRequired,
  baseAvoid: PropTypes.number.isRequired,
  baseDamage: PropTypes.number.isRequired,
  baseInitiative: PropTypes.number.isRequired,
  healing: PropTypes.number.isRequired,
  hacking: PropTypes.number.isRequired,
};


// == Export
export default AdvancedInfo;
