import React, { Component } from 'react';
import './Day.css';
import Event from '../Event/Event';

export class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        { day: 1, startTime: '1:00 pm', endTime: '2:00 pm', name: 'Lunch', isClicked:'false'},
        { day: 1, startTime: '11:00 am', endTime: '12:00 pm', name: 'Appointment', isClicked:'false'},
        { day: 13, startTime: '10:00 am', endTime: '10:30 am', name: 'Dentist', isClicked:'false'},
        { day: 23, startTime: '4:00 pm', endTime: '5:00 pm', name: 'Meeting', isClicked:'false'}
      ]
    };
  }

  addEvents() {
    const { date } = this.props;
    const isEvent = this.state.events.filter(event => {
      return date == event.day;
    });
    if (isEvent.length) {
      return isEvent.map(event => {
        return <Event event={event} key={Date.now()} />;
      });
    }
  }

  handleDblClick() {
    console.log('double click');
    
  }

  render() {
    const { month, date } = this.props;
    return (
      <div className="day" ondblclick={this.handleDblClick}
      >
        <span className="date">{this.props.date}</span>
        {this.addEvents()}
      </div>
    );
  }
}

export default Day;
