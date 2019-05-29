import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import FriendList from './Components/FriendList';
import FriendForm from './Components/FriendForm';

import axios from 'axios';

import './App.css';

class App extends Component {
constructor() {
  super();
  this.state = {
    friends: []
  };
}

componentDidMount() {
  axios
  .get('http://localhost:5000/friends')
  .then(res => this.setState({ friends: res.data }))
  .catch(err => window.alert(err))
}

render() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/friends'>Friends</Link>
          </li>
          <li>
            <Link to='/add-friend'>Add New Friend</Link>
          </li>
        </ul>
      </nav>
      <Route exact path='/' component={Home} />
      <Route exact path='/friends' render={props => (
        <FriendList {...props} friends={this.state.freinds} />
      )} />
      <Route path='/add-friend' component={FriendForm} />
    </div>
  );
 }
}

export default App;
