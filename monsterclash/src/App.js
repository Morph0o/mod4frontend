import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Intro from './components/intro'
import User from './components/user'
import Monster from './components/monster'
import Fight from './components/fight'
import Home from "./components/home";

function App() {
  return (
    <div>
    <div> 
      <a href="/">Home</a>
      <a href="/intro">How to</a>
      <a href="/user">Create Player</a>
      <a href="/monster">Create Monster</a>
      <a href="/fight">Fight Monster</a>


    </div>
    <div>
      MONSTERCLASH
    </div>
       <Router>
         <div>
    <Route path="/intro" component={Intro} />
    <Route path="/user" component={User} />
    <Route path="/monster" component={Monster} />
    <Route path="/fight" component={Fight}/>
    <Route path="/" component={Home}/>
    </div>
  </Router>
  </div>

  );
}

export default App;
