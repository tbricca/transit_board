import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      busRoutes: [],
      users: []
    }
  }
  
    componentDidMount() {
      // fetch('/users')
      //   .then(res => res.json())
      //   .then(users => {
      //     console.log( users );
      //     this.setState({ users })
      //   });

      fetch('/bus-routes')
        .then(res => res)
        .then(busRoutes => {
          console.log(busRoutes);
          this.setState({ busRoutes });
        });
      
  }

  render() {
    return (
      <div className="App">
         <h1>Users not</h1>
         <h1>Transit Board</h1>
<h4> A board to track all the transit around you </h4>
<input className="searchbox" type='text' placeholder="Input your address here..." />
         {/* {this.state.users.map(user =>
           <div key={user.id}>{user.username}</div>
         )} */}
         {/* {this.state.busRoutes.map(busRoute =>
          <div key ={busRoute.id}>{busRoute}</div>
        )} */}

      </div>
    );
  }
}

export default App;
