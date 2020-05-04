// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';


// == Import local
import './style.scss';

// == Component
const Exploration = ({ randomExploration, findExploration }) => {
  useEffect(findExploration, []);
  const exploration = randomExploration.type;

  return (
    <>
      {exploration === 'nothing' ? <Redirect to="/play/nothing" /> : ''}
      {exploration === 'fight' ? <Redirect to="/play/combat" /> : ''}
      {exploration === 'reward' ? <Redirect to="/play/reward" /> : ''}
      {exploration === 'attribute' ? <Redirect to="/play/event" /> : ''}
    </>
  );
};

// == Props validation
Exploration.propTypes = {
  randomExploration: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
  findExploration: PropTypes.func.isRequired,
};

// == Export
export default Exploration;
