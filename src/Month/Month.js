import React, { Component } from 'react';
import Day from '../Day/Day';
import './Month.css';

export class Month extends Component {

  days() {
    const {daysInMonth, month, click, dblClick} = this.props;
    const days = [];
    for (let i = 0; i < daysInMonth; i++) {
      days.push(i+1);
    }
    return days.map((day, index)=> <Day date={day} month={month} key={index} events={this.props.events} click={click} dblClick={dblClick}/> );
  }
  render() {
    return (
      <div className="Month">
        {this.days()}
      </div>
    );
  }
}

export default Month;

