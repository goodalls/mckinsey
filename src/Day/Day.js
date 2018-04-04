import React, { Component } from 'react';
import './Day.css';
import Event from '../Event/Event';

export class Day extends Component {

  addEvents() {
    const { date, events , click} = this.props;
    const isEvent = events.filter(event => {
      return date == event.day;
    });
    if (isEvent.length) {
      return isEvent.map(event => {
        return (
          <Event event={event} key={Date.now()} click={click} />
        );
      });
    }
  }


  render() {
    const { month, date, dblClick } = this.props;
    return (
      <div className="day" onDoubleClick={() => dblClick(date)}>
        <span className="date">{this.props.date}</span>
        {this.addEvents()}
      </div>
    );
  }
}

export default Day;
