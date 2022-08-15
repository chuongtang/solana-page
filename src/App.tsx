import React, { useEffect } from 'react';
import twitterLogo from './assets/twitter-logo.svg';
import './App.css';
import { getProvider } from './utils'
import NoPhantom from './components/NoPhantom';
import MainPage from './components/MainPage';
import { TLog } from '../types';

// Constants
const provider = getProvider();

// export type ConnectedMethods =
//   | {
//       name: string;
//       onClick: () => Promise<string>;
//     }
//   | {
//       name: string;
//       onClick: () => Promise<void>;
//     };

//     interface Props {
//       publicKey?: PublicKey | null;
//       connectedMethods: ConnectedMethods[];
//       handleConnect: () => Promise<void>;
//       logs: TLog[];
//       clearLogs: () => void;
//     }

const App = () => {

  if (!provider) {
    return <NoPhantom />;
  }

  return (<MainPage />)
        
};

export default App;