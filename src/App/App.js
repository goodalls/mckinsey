import React, { Component } from 'react';
import './App.css';
import Month from '../Month/Month';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    };
  }

  date() {
    const today = new Date();
    const month = today.getMonth();
    const longMonth = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return longMonth[month];
  }

  daysInMonth() {
    const { year, month } = this.state;
    return new Date(year, month, 0).getDate();
  }

  render() {
    const { year } = this.state;
    return (
      <div className="App">
        <header>
          <h1><span className="month">{this.date()}</span> {year}</h1>
          <div className="navButtons">
            <button className="arrowLeft">&#8249;</button>
            <button className="today">Today</button>
            <button className="arrowright">&#8250;</button>
          </div>
        </header>
        <div className="weekDays">Sun</div>
        <div className="weekDays">Mon</div>
        <div className="weekDays">Tue</div>
        <div className="weekDays">Wed</div>
        <div className="weekDays">Thu</div>
        <div className="weekDays">Fri</div>
        <div className="weekDays">Sat</div>
        <Month days={this.daysInMonth()} />
      </div>
    );
  }
}

export default App;
