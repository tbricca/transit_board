import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {users: []}
  
    componentDidMount() {
      fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }

  render() {
    return (
      <div className="App">
         <h1>Users</h1>
         <h1>Transit Board</h1>
<h4> A board to track all the transit around you </h4>
<input className="searchbox" type='text' placeholder="Input your address here..." />
         {this.state.users.map(user =>
           <div key={user.id}>{user.username}</div>
         )}
      </div>
    );
  }
}

export default App;
