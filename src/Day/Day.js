import React, { Component } from 'react';
import './Day.css';
import Event from '../Event/Event';

export class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        { day: 1, startTime: 1300, endTime: 1400 },
        { day: 1, startTime: 1300, endTime: 1400 },
        { day: 13, startTime: 1300, endTime: 1400 },
        { day: 23, startTime: 1300, endTime: 1400 }
      ]
    };
  }

  addEvents() {
    const { date } = this.props;
    let isEvent = this.state.events.filter(event => {
      date === event.day;
    });
    console.log(isEvent);

    //  if(isEvent.length) {
    //    isEvent.map((event) => {
    //      <Event event={event} />
    //    })
    //  }
  }

  handleClick(event) {
    console.log('clicked');
  }

  render() {
    const { month, date } = this.props;
    return (
      <div className="day" onClick={this.handleClick}>
        <span className="date">{this.props.date}</span>
        {this.addEvents}
      </div>
    );
  }
}

export default Day;
