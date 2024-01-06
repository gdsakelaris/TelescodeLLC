import logo from './logo2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <code>Telescode LLC</code>
        </h1>
      </header>
      <a
        className="App-link"
        href="https://softwaresack.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to Software Sack
      </a>
      <div className="App-footer">
      <p>© 2023 Telescode LLC. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
