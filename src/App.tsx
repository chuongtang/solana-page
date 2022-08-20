
import './App.css';
import { getProvider } from './utils'
import NoPhantom from './components/NoPhantom';
import MainPage from './components/MainPage';

const provider = getProvider();

const App = () => {

  if (!provider) {
    return <NoPhantom />;
  }
  return (<MainPage />)       
};

export default App;