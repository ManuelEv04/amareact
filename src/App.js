import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Proyecto <code>a-marte</code> Ecommerce.
        </p>
        <a
          className="App-link"
          href="./Inicio.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Iniciar
        </a>
      </header>
    </div>
  );
}

export default App;
