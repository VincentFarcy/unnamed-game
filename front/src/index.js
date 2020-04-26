// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// == Import : else
import 'bootstrap/dist/css/bootstrap.min.css';

// == Import : local
import './styles/index.scss';
import App from 'src/containers/App';
import store from 'src/store';


// == Render
const rootComponent = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

const target = document.getElementById('root');

render(rootComponent, target);
