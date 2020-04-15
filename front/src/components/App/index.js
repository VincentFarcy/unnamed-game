// == Import npm
import React from 'react';
import axios from 'axios';

// == Import local
import reactLogo from './react-logo.svg';
import './styles.scss';
import TestButton from '../../containers/TestButton';

// == test base API Uri constant in a config file
import { BASE_API_URI } from '../../app.config';
console.log(BASE_API_URI);

// == code Vincent
let token;
// LOGIN ----------------
axios({
  method: 'post',
  url: `${BASE_API_URI}/api/login_check`,
  // url: 'https://localhost:8001/api/login_check',
  withCredentials: true,
  data: {
    username: 'bill',
    password: 'Tagazou0!',
  },
})
  .then((responseLogin) => {
    console.log('api/login_check', responseLogin.data);
    token = responseLogin.data.token;
    // BROWSE --------------
    axios({
      method: 'get',
      url: `${BASE_API_URI }/api/game/load`,
      // url: 'https://localhost:8001/api/browse`',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((responseGameLoad) => {
        console.log('ap - game loading', responseGameLoad.data);
      })
      .catch((error) => {
        console.log('api', error);
      });
    // ----------------------
  })
  .catch((error) => {
    console.log('api/login_check', error);
  });
// ----------------------

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
