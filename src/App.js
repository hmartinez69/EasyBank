import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Footer from './components/Footer/footer';
import Nav from './components/Nav/Nav';
import LatestArticles from './components/LatestArticles/LatestArticles';
import Attribution from './components/Attribution/Attribution';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Nav></Nav>

      <Header></Header>
      
      <LatestArticles></LatestArticles>

      <Footer></Footer>

      <Attribution
        challengeName='Frontend Mentor'
        challengeUrl="https://www.frontendmentor.io?ref=challenge"
        authorName="Hugo MARTINEZ"
        authorUrl="https://hmartinez.fr"
        ></Attribution>
    </div>
  );
}

export default App;
