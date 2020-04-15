// == Import npm
import React from 'react';

// == Import local
import './styles.scss';
import Header from '../Header';
import MainPlay from '../MainPlay';
import MainSite from '../MainSite';
import CreateCharacter from '../CreateCharacter';
import Footer from '../Footer';
import Story from '../Story';

// == Coponent
const App = () => (
  <div className="app">
    <Header />
    <main className="main">
      {/* <MainSite
        introTitle="Unnamed Game"
        introContent="Ceci est l'introduction de mise en ambiance pour le premier jeu proposé !"
        warningContent="Veuillez noter que le premier Unnamed Game est déconseillé aux moins de 12 ans !"
      /> */}
      {/* <MainPlay /> */}
      {/* <CreateCharacter AbilityList="test" /> */}
      <Story />
    </main>
    <Footer />
  </div>
);

// == Export
export default App;