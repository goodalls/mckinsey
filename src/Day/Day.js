import React, { Component } from 'react';
import './Day.css';
import Event from '../Event/Event';

export class Day extends Component {

  addEvents() {
    const { date, events } = this.props;
    const isEvent = events.filter(event => {
      return date == event.day;
    });
    if (isEvent.length) {
      return isEvent.map(event => {
        return (
          <Event event={event} key={Date.now()} click={this.handleClick} />
        );
      });
    }
  }

  handleClick = eventObj => {
    console.log(eventObj);
  };

  render() {
    const { month, date } = this.props;
    return (
      <div className="day">
        <span className="date">{this.props.date}</span>
        {this.addEvents()}
      </div>
    );
  }
}

export default Day;
