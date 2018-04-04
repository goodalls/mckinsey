import React, { Component } from 'react'
import './Event.css';

export class Event extends Component {

  handleClick = () => {
    
    
  }
  render() {
    const {event} = this.props;
    return (
      <div className='Event' onClick={this.handleClick}>
        <h4>{event.name}</h4>
      </div>
    )
  }
}

export default Event;

