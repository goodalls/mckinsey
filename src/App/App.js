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
          <div className="navButtons">
            <button className="arrowLeft">&#8249;</button>
            <button className="today">Today</button>
            <button className="arrowright">&#8250;</button>
          </div>
        </header>
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
    );
  }
}

export default App;
