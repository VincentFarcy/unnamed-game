// == Import npm
import React from 'react';

// == Import local
import './styles.scss';
import Header from '../Header';
import MainPlay from '../MainPlay';
import MainSite from '../MainSite';
import Footer from '../Footer';

// == Coponent
const App = () => (
  <div className="app">
    <Header />
    <main className="main">
      <MainPlay />
      {/* <MainSite /> */}
    </main>
    <Footer />
  </div>
);

// == Export
export default App;
