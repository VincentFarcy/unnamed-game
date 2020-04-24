// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';

// == Import local
// == Import Website Components
import './styles.scss';
import Header from '../../containers/Header/Header';
import MainSite from '../../containers/MainSite';
import Team from '../Team';
import Acknowledgements from '../Acknowledgements';
import Rules from '../Rules';
import SignUp from '../../containers/SignUp';
import SignIn from '../../containers/SignIn';
import UserPage from '../../containers/UserPage';
import Legal from '../Legal';
import NotFound from '../../containers/NotFound';

// == Import Gameplay Components
import MainPlay from '../../containers/MainPlay';
import Story from '../../containers/Story';
import Sequence from '../../containers/Sequence';
import Death from '../../containers/Death';
import Combat from '../../containers/Combat/Combat';
import Reward from '../../containers/Reward';
import CreateCharacter from '../../containers/CreateCharacter/CreateCharacter';
import Event from '../../containers/Event';
import Footer from '../Footer';

// == Component
const App = ({ isGameOn, bgImageCssClass }) => (
  <div className={`app ${bgImageCssClass}`}>
    <div hidden className="bg--hidden" />
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
        <Route exact path="/play/sequence">
          { !isGameOn ? <Redirect to="/play" /> : <Sequence />}
        </Route>
        <Route exact path="/play/combat">
          { !isGameOn ? <Redirect to="/play" /> : <Combat />}
        </Route>
        <Route exact path="/play/reward">
          { !isGameOn ? <Redirect to="/play" /> : <Reward />}
        </Route>
        <Route exact path="/play/death">
          { !isGameOn ? <Redirect to="/play" /> : <Death />}
        </Route>
        <Route exact path="/play/event">
          { !isGameOn ? <Redirect to="/play" /> : <Event />}
        </Route>
        <Route component={NotFound} />
      </Switch>

    </main>
    <Footer />
  </div>
);

// == Props validation
App.propTypes = {
  isGameOn: PropTypes.bool.isRequired,
  bgImageCssClass: PropTypes.string.isRequired,
};

// == Export
export default App;
