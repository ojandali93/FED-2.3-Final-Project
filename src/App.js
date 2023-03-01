import logo from './logo.svg';
import './App.css';
import Maps from './Components/Maps';
import Home from './Components/Home';
import { MainContextProvider } from './Context/MainContext';

function App() {

  return (
    <MainContextProvider>
      <div className="App">
        <header className="App-header">
          <Maps />
          <Home />
        </header>
      </div>
    </MainContextProvider>
  );
}

export default App;
