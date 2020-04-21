// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// == Import local
// == Import Website Components
import './styles.scss';
import Header from '../../containers/Header';
import MainSite from '../../containers/MainSite';
import Team from '../Team';
import Acknowledgements from '../Acknowledgements';
import Rules from '../Rules';
import SignUp from '../../containers/SignUp';
import SignIn from '../../containers/SignIn';
import UserPage from '../../containers/UserPage';
import Legal from '../Legal';
import NotFound from '../NotFound';


// == Import Gameplay Components
import MainPlay from '../../containers/MainPlay';
import Story from '../../containers/Story';
import Dialog from '../Dialog';
import Combat from '../../containers/Combat';
import Reward from '../../containers/Reward';
import CreateCharacter from '../../containers/CreateCharacter';
import Footer from '../Footer';

const temp= "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque illo vitae et? Est eius beatae at, sed autem nulla ratione fugit natus officia aspernatur exercitationem non aliquam quam accusamus quasi?";

// == Component

const App = ({ isGameOn }) => (
  <div className="app">
    <Header />
    <main className="main">
      <Switch>
        {/* Website routes */}
        <Route exact path="/" component={MainSite} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/acknowledgements" component={Acknowledgements} />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/legal-notices" component={Legal} />

        {/* Gameplay routes */}
        <Route exact path="/play" component={MainPlay} />
        <Route exact path="/play/create-player">
          { !isGameOn ? <Redirect to="/play" /> : <CreateCharacter />}
        </Route>
        <Route exact path="/play/story">
          { !isGameOn ? <Redirect to="/play" /> : <Story />}
        </Route>
        <Route exact path="/play/combat">
          { !isGameOn ? <Redirect to="/play/combat" /> : <Combat />}
        </Route>
        <Route exact path="/play/reward">
          { !isGameOn ? <Redirect to="/play/reward" /> : <Reward />}
        </Route>
        <Route exact path="/play/dialogue">
          { !isGameOn ? <Redirect to="/play/dialogue" /> : <Dialog />}
        </Route>
        <Route component={NotFound} />
      </Switch>

    </main>
    <Footer />
  </div>
);

// == Props validation
App.porpTypes = {
  isGameOn: PropTypes.bool.isRequired,
};

// == Export
export default App;
