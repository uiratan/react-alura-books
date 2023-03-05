import './App.css';
import Logo from './components/Logo/index.js';
import OpcoesHeader from './components/OpcoesHeader/index.js';
import IconesHeader from './components/IconesHeader/index.js';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        <OpcoesHeader />
        <IconesHeader />

      </header>
    </div>
  );
}

export default App;
