import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.date();
  }

  date() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const longMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${longMonth[month -1]} ${year}`;
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>{this.date()}</h1>
          <button class="arrowLeft"></button>
          <button>Today</button>
          <button class="arrowright"></button>
        </header>
        
      </div>
    );
  }
}

export default App;
