// == Import npm
import React from 'react';

// == Import local
import './styles.scss';
import Header from '../Header';
import MainPlay from '../MainPlay';
import MainSite from '../MainSite';
import Story from '../Story';
import CreateCharacter from '../CreateCharacter';
import Footer from '../Footer';

// == Coponent
const temp = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque illo vitae et? Est eius beatae at, sed autem nulla ratione fugit natus officia aspernatur exercitationem non aliquam quam accusamus quasi?";

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
      {/* <CreateCharacter AbilityList="Test" /> */}
      <Story Chapter={temp}/>
    </main>
    <Footer />
  </div>
);

// == Export
export default App;
