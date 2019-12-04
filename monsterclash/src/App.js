import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Intro from './components/intro'
import User from './components/user'
import Monster from './components/monster'
import Fight from './components/fight'
import Home from './components/home'
import Move from './components/move'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      users: [],
      monsters: [],
      monsterMoves: [],
      userMoves: [] 
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(users => this.setState({
      users: users
    }))
    fetch('http://localhost:3000/monsters')
    .then(resp => resp.json())
    .then(monsters => this.setState({
      monsters: monsters
    }))
    fetch('http://localhost:3000/monstermoves')
    .then(resp => resp.json())
    .then(mmoves => this.setState({
      monsterMoves: mmoves

    }))
    fetch('http://localhost:3000/usermoves')
    .then(resp => resp.json())
    .then(usermoves => this.setState({
      userMoves: usermoves
    }))
  }
render(){
  return (
    <div>
    <div> 
      <a className="links" href="/">Home</a>
      <a className="links" href="/intro">How to</a>
      <a className="links" href="/user">Create Player</a>
      <a className="links" href="/monster">Create Monster</a>
      <a className="links" href="/move">Create Move</a>
      <a  className="links" href="/fight">Fight Monster</a>
    </div>
       <Router>
         <div>
    <Route path="/intro" component={Intro} />
    <Route path="/user" component={User} />
    <Route path="/monster" component={Monster} />
    <Route path="/fight" render={()=> <Fight user={this.state.users} monster={this.state.monsters} usermoves={this.state.userMoves} monstermoves={this.state.monsterMoves}/>}/>
    <Route path="/" component={Home}/>
    <Route path="/move" component={Move}/>
    </div>
  </Router>
  </div>

    );}
}

export default App;
