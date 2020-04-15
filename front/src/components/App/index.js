// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// == Import local
// == Import Website Components
import './styles.scss';
import Header from '../Header';
import MainSite from '../MainSite';
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
import Reward from '../Reward';
import CreateCharacter from '../../containers/CreateCharacter';
import Footer from '../Footer';

const temp= "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque illo vitae et? Est eius beatae at, sed autem nulla ratione fugit natus officia aspernatur exercitationem non aliquam quam accusamus quasi?";

// == Component

const App = () => (
  <div className="app">
    <Header isLogged={false} />
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
        <Route path="/play/create-player" component={CreateCharacter} />
        <Route path="/play/story" component={Story} />
        <Route path="/play/combat" component={Combat} />
        <Route path="/play/reward" component={Reward} />
        <Route path="/play/dialogue" component={Dialog} />

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

// == Export
export default App;
