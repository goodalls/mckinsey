import React, { Component } from 'react';
import './App.css';
import Month from '../Month/Month';
import {events} from '../data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      events: []
    };
  }

  componentDidMount() {
    if (!this.state.events.length){
      this.setState({events});
    }
  }

  handleClick = eventObj => {
    const state = this.state.events.filter(event => event.id != eventObj.id)
    const newEvent = Object.assign({...eventObj},{isClicked: !eventObj.isclicked})
    this.setState({
      events: [...state, newEvent]
    })
  };

  handleDblClick = (day) => {
   const newEvent = {
    id: 4,
    day,
    startTime: '1:00 pm',
    endTime: '2:00 pm',
    name: 'Lunch',
    isClicked: 'false'
    }
    //would need to be dynamic instead of hard coded
    const state = [...this.state.events]
    this.setState({events: [...state, newEvent]})

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
        <Month daysInMonth={this.daysInMonth()} month={this.date()} events={this.state.events} click={this.handleClick} dblClick={this.handleDblClick}/>
      </div>
    );
  }
}

export default App;
