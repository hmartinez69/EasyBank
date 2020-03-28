import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Footer from './components/Footer/footer';
import Nav from './components/Nav/Nav'
import LatestArticles from './components/LatestArticles/LatestArticles'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <LatestArticles></LatestArticles>

      <Footer></Footer>
    </div>
  );
}

export default App;
