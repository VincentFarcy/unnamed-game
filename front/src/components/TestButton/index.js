// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';

// == Component
const TestButton = ({ testMiddleware }) => (
  <div>
    <button type="submit" onClick={testMiddleware}>Test Middleware</button>
  </div>
);

// == Props validation
TestButton.propTypes = {
  testMiddleware: PropTypes.func.isRequired,
};

// == Export
export default TestButton;
