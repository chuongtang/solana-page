import React, { useEffect } from 'react';
import twitterLogo from './assets/twitter-logo.svg';
import './App.css';
import { getProvider } from './utils'

// Constants
const provider = getProvider();
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;


const isPhantomInstalled = window
// const isPhantomInstalled = window.phantom?.solana?.isPhantom
// const getProvider = () => {
//   if ('phantom' in window) {
//     const provider = window.phantom?.solana;

//     if (provider?.isPhantom) {
//       return provider;
//     }
//   }

//   window.open('https://phantom.app/', '_blank');
// };
const App = () => {
  
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log(isPhantomInstalled)
          console.log('Phantom wallet found!');
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.error(error);
    }
  };

  /*
   * When our component first mounts, let's check to see if we have a connected
   * Phantom Wallet
   */
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🖼 GIF Portal</p>
          <p className="sub-text">
            View your GIF collection in the metaverse ✨
          </p>
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;