// == Import npm
import React from 'react';

// == Import local
import reactLogo from './react-logo.svg';
import './styles.scss';
import TestButton from '../../containers/TestButton';

// == Component
const App = () => (
  <div className="app">
    <img src={reactLogo} alt="react logo" />
    <h1>Composant : App</h1>
    <TestButton />
  </div>
);

// == Export
export default App;
