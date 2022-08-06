import React, { useEffect } from 'react';
import twitterLogo from './assets/twitter-logo.svg';
import './App.css';
import { getProvider } from './utils'
import NoPhantom from './components/NoPhantom';
import MainPage from './components/MainPage';
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { TLog } from '../types';

// Constants
const provider = getProvider();
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

export type ConnectedMethods =
  | {
      name: string;
      onClick: () => Promise<string>;
    }
  | {
      name: string;
      onClick: () => Promise<void>;
    };

    interface Props {
      publicKey?: PublicKey | null;
      connectedMethods: ConnectedMethods[];
      handleConnect: () => Promise<void>;
      logs: TLog[];
      clearLogs: () => void;
    }

const App = () => {

  if (!provider) {
    return <NoPhantom />;
  }

  return (
    <div className="App">
      <div className="container">
        {/* <div className="header-container">
          <p className="header">🖼 GIF Portal</p>
          <p className="sub-text">
            View your GIF collection in the metaverse ✨
          </p>
        </div> */}
        <MainPage />
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