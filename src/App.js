import React from 'react';
import FriendsList from './Components/FriendsList';
import FriendForm from './Components/FriendForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Friends</h1>
      <FriendsList />
      <FriendForm />
    </div>
  );
}

export default App;
