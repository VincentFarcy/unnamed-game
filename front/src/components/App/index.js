// == Import npm
import React from 'react';
import axios from 'axios';

// == Import local
import reactLogo from './react-logo.svg';
import './styles.scss';
import TestButton from '../../containers/TestButton';


// == code Vincent
let token;
// LOGIN ----------------
axios({
  method: 'post',
  url: 'https://localhost:8001/api/login_check',
  withCredentials: true,
  data: {
    username: 'bob@o.o',
    password: 'tagazou',
  },
})
  .then((responseLogin) => {
    console.log('api/login_check', responseLogin.data);
    token = responseLogin.data.token;
    // BROWSE --------------
    axios({
      method: 'get',
      url: 'https://localhost:8001/api/browse',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((responseBrowse) => {
        console.log('api', responseBrowse.data);
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
