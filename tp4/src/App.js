import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://github.com/SainMar/TP4_WEB_OCRES"
          target="_blank"
          rel="noopener noreferrer"
          style={{marginLeft: "0px"}}
        >TP4 - Facebook Lite
        </a>
      </header>
      <div class="App-body">
        <MainPage/>
      </div>
    </div>
  );
}

export default App;
