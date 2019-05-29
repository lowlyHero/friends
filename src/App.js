import React, { Component } from 'react';
import FriendsList from './Components/FriendsList';
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
      <h1>My Friends</h1>
      <FriendsList />
      <FriendForm />
    </div>
  );}
  }

export default App;
