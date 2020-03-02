import React from 'react';
import './scss/App.scss';
import Home from './pages/Home';
import Manual from './pages/Manual';
import Aperture from './pages/Aperture';
import Footer from './pages/Footer';

const App = () => {
  return (
    <>
      <Home />
      <Manual />
      <Aperture />
      <Footer />
    </>
  );
}

export default App;
