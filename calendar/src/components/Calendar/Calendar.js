import React, { PureComponent } from 'react';

import './calendar.scss';

export class Calendar extends PureComponent {
  remove = (index) => {
    const { user } = this.props;

    const data = {
      ...user,
      ...user.events.splice(index, 1),
    };
    this.props.remove(data);
  };


  generateEvents = () => {
    const { events } = this.props.user;

    return (

      events
      && (
      <ul className="event-box">
        {
        events.map((box, boxIndex) => (
          <li
            key={boxIndex}
            id={boxIndex}
            className="event"
            style={{
              top: (box.start * 2),
              height: (box.duration * 2),
            }}
          >
            {box.title}
            <button
              type="button"
              className="event-remove"
              onClick={() => this.remove(boxIndex)}
            >
              &times;
            </button>
          </li>
        ))
        }
      </ul>
      )
    );
  };

  generateTimeline = () => {
    const timeline = ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00'];

    return (
      <ul className="timeline">
        {
          timeline.map(item => (
            <li
              key={item}
              className="time"
            >
              {item}
            </li>
          ))
        }
      </ul>
    );
  };

  render() {
    return (

      <div className="calendar-box">
        {this.generateTimeline()}
        {this.generateEvents()}
      </div>

    );
  }
}


/*
export const Calendar = ({ events }) => {

  const generateEvents = () => {


    return (
    <ul className="ground">
      {
        events.map((box, boxIndex) => (
          <li
            key={boxIndex}
            id={boxIndex}
            className="event"
            style={{
              marginTop: box.start,
              height: box.duration,
            }}

          >
            <h3>{box.title}</h3>

          </li>
        ))
      }
    </ul>
    )
  };

  return (


      this.generateEvents()


  );
};
*/
