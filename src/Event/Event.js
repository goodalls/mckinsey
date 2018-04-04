import React from 'react';
import './Event.css';

const Event = (props) => {
  const { event } = props;
  const klass = !event.isClicked ? 'Event clicked' : 'Event';
  return (
    <div className={klass} onClick={() => props.click(event)}>
      <h4>{event.name}</h4>
    </div>
  );
};

export default Event;
