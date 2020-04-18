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
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import Legal from '../Legal';


// == Import Gameplay Components
import MainPlay from '../../containers/MainPlay';
import Story from '../../containers/Story';
import Dialog from '../Dialog';
import Combat from '../Combat';
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
        <Route path="/team" component={Team} />
        <Route path="/acknowledgements" component={Acknowledgements} />
        <Route path="/rules" component={Rules} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/legal-notices" component={Legal} />

        {/* Gameplay routes */}
        <Route exact path="/play" component={MainPlay} />
        { isGameOn && 
          <Route path="/play/create-player" component={CreateCharacter} />
          || <Redirect to="/play" /> }
        { isGameOn && <Route path="/play/story" component={Story} />
          || <Redirect to="/play" /> }
        { isGameOn && <Route path="/play/combat" component={Combat} />
          || <Redirect to="/play" /> }
        { isGameOn && <Route path="/play/reward" component={Reward} />
          || <Redirect to="/play" /> }
        { isGameOn && <Route path="/play/dialogue" component={Dialog} />
          || <Redirect to="/play" /> }

      </Switch>
      {/* <MainSite
        introTitle="Unnamed Game"
        introContent="Ceci est l'introduction de mise en ambiance pour le premier jeu proposé !"
        warningContent="Veuillez noter que le premier Unnamed Game est déconseillé aux moins de 12 ans !"
      /> */}
      {/* <MainPlay /> */}
      {/* <CreateCharacter />  */}
      {/* <Story Chapter={temp} /> */}
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
