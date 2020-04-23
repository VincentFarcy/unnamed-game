// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';
import Combat from '../../containers/Combat';
import Reward from '../../containers/Reward';
import Event from '../../containers/Event';
import Sequence from '../../containers/Sequence';
import Story from '../../containers/Story';

// == Component
const Exploration = ({ findExploration, randomExploration }) => {
  useEffect(findExploration, []);
  const exploration = randomExploration.type;
  console.log(exploration);

  return (
    <>
      {exploration === 'nothing' ? <Story /> : ''}
      {exploration === 'fight' ? <Combat /> : ''}
      {exploration === 'reward' ? <Reward /> : ''}
      {exploration === 'fight and reward' ? <Combat withReward /> : ''}
      {exploration === 'attribute' ? <Event /> : ''}
      {exploration === 'attribute and reward' ? <Event withReward /> : ''}
    </>
  );
};

// == Props validation
Exploration.propTypes = {
  findExploration: PropTypes.func.isRequired,
  randomExploration: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
};

// == Export
export default Exploration;
