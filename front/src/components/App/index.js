// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// == Import local
import './styles.scss';
import './button.scss';
import './dialog.scss';
import './player-action.scss';
import './character-info.scss';
import './site.scss';
// == Import Website Components
import Header from '../../containers/Header/Header';
import Footer from '../../containers/Footer';
import MainSite from '../../containers/MainSite';
import Team from '../../containers/Team';
import Acknowledgements from '../../containers/Acknowledgements';
import Rules from '../Rules';
import SignUp from '../../containers/SignUp';
import SignIn from '../../containers/SignIn';
import UserPage from '../../containers/UserPage';
import Legal from '../../containers/Legal';
import NotFound from '../../containers/NotFound';

// == Import Gameplay Components
import MainPlay from '../../containers/MainPlay';
import Story from '../../containers/Story';
import Sequence from '../../containers/Sequence';
import Death from '../Death';
import Combat from '../../containers/Combat/Combat';
import Exploration from '../../containers/Exploration';
import Reward from '../../containers/Reward';
import Train from '../../containers/TrainingRoom';
import Medic from '../../containers/MedicBay';
import Nothing from '../../containers/Nothing';
import Mainhub from '../../containers/MainHub';
import CreateCharacter from '../../containers/CreateCharacter/CreateCharacter';
import Event from '../../containers/Event';
import Ending from '../Ending';

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
          { !isGameOn ? <Redirect to="/play" /> : <CreateCharacter /> }
        </Route>
        <Route exact path="/play/story">
          { !isGameOn ? <Redirect to="/play" /> : <Story /> }
        </Route>
        <Route exact path="/play/sequence">
          { !isGameOn ? <Redirect to="/play" /> : <Sequence /> }
        </Route>
        <Route exact path="/play/combat">
          { !isGameOn ? <Redirect to="/play" /> : <Combat /> }
        </Route>
        <Route exact path="/play/reward">
          { !isGameOn ? <Redirect to="/play" /> : <Reward /> }
        </Route>
        <Route exact path="/play/death">
          { !isGameOn ? <Redirect to="/play" /> : <Death /> }
        </Route>
        <Route exact path="/play/event">
          { !isGameOn ? <Redirect to="/play" /> : <Event /> }
        </Route>
        <Route exact path="/play/exploration">
          { !isGameOn ? <Redirect to="/play" /> : <Exploration /> }
        </Route>
        <Route exact path="/play/medic">
          { !isGameOn ? <Redirect to="/play" /> : <Medic /> }
        </Route>
        <Route exact path="/play/mainhub">
          { !isGameOn ? <Redirect to="/play" /> : <Mainhub /> }
        </Route>
        <Route exact path="/play/train">
          { !isGameOn ? <Redirect to="/play" /> : <Train /> }
        </Route>
        <Route exact path="/play/nothing">
          { !isGameOn ? <Redirect to="/play" /> : <Nothing /> }
        </Route>
        <Route exact path="/play/ending">
          { !isGameOn ? <Redirect to="/play" /> : <Ending /> }
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
