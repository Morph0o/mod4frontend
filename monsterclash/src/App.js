import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import intro from './components/intro'

function App() {
  return (
    <div> </div>
       <Router>
         <div>
    <Route path="/intro" component={intro} />
    </div>
  </Router>

  );
}

export default App;
