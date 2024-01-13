import logo from './logo2.png';
import './App.css';

function SumTube() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <code>SumTube</code>
        </h1>
      </header>
      <a
        className="App-link"
        href="http://3.218.77.172/accounts/login/?next=/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to SumTube
      </a>
      <div className="App-footer">
      <p>© 2023 Telescode LLC. All rights reserved.</p>
      </div>
    </div>
  );
}

export default SumTube;
