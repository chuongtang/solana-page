import React, { useEffect } from 'react';
import twitterLogo from './assets/twitter-logo.svg';
import './App.css';
import { getProvider } from './utils'
import NoPhantom from './components/NoPhantom';
import MainPage from './components/MainPage';

// Constants
const provider = getProvider();


const App = () => {

  if (!provider) {
    return <NoPhantom />;
  }

  return (<MainPage />)
        
};

export default App;