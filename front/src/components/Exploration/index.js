// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';
import Nothing from '../../containers/Nothing';
import Combat from '../../containers/Combat/Combat';
import Reward from '../../containers/Reward';
import Event from '../../containers/Event';

// == Component
const Exploration = ({ findExploration, randomExploration }) => {
  useEffect(findExploration, []);
  const exploration = randomExploration.type;

  return (
    <>
      {exploration === 'nothing' ? <Nothing /> : ''}
      {exploration === 'fight' ? <Combat /> : ''}
      {exploration === 'reward' ? <Reward /> : ''}
      {exploration === 'attribute' ? <Event /> : ''}
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
