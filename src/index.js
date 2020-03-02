import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactFullpage from '@fullpage/react-fullpage';
import './scss/App.scss';
import Home from './pages/Home';
import Manual from './pages/Manual';
import Aperture from './pages/Aperture';
import Footer from './pages/Footer';

const Fullpage = () => (
    <ReactFullpage
      //fullpage options
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {800} /* Options here */
      continuousVertical = {true}
      navigation = {true}
      parallax = {true}
  
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Home />
            <Manual />
            <Aperture />
            <Footer />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

ReactDOM.render(<Fullpage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
