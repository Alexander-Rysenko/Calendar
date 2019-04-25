import React, { Component } from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';

import './addEvent.scss';

export class AddEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      start: '',
      duration: '',
    };
  }

  keyPressOff = (e) => {
    e.preventDefault();
  };


  verifyNumber = (value) => {
    const numberRex = new RegExp('^[0-9]+$');
    return numberRex.test(value);
  };

  handleChanges = (event) => {
    const [target] = [event.target];

    if (target.value[0] === ' ') return;
    if (target.value && target.name === 'duration' && !this.verifyNumber(target.value)) return;

    this.setState({ [target.name]: target.value });
  };

  handleChange = (time) => {
    const m = moment(time);
    const minutes = (m.hour() - 8) * 60 + m.minute();
    this.setState({ start: minutes });
  };

  addEvent = (e) => {
    e.preventDefault();
    const { title, start, duration } = this.state;
    const { user } = this.props;

    const events = {
      title,
      start,
      duration,
    };

    const data = {
      ...user,
      ...user.events.push(events),
    };
    this.props.addEvents(data);
  };


  render() {
    const { title, start, duration } = this.state;

    return (

      <form
        className="event-form"
        onSubmit={this.addEvent}
      >

        <div className="form-group">
          <label className="label-text" htmlFor="event-title">Title</label>
          <input
            id="event-title"
            value={title}
            name="title"
            type="text"
            className="event-input"
            onChange={event => this.handleChanges(event)}
            required
          />
        </div>

        <div className="form-group">
          <label className="label-text" htmlFor="event-time">Start time</label>
          <Datetime
            defaultValue={start}
            timeConstraints={{ hours: { min: 8, max: 16 } }}
            dateFormat={false}
            timeFormat="h:mm"
            onChange={event => this.handleChange(event)}
            inputProps={{
              id: 'event-time',
              onKeyDown: event => this.keyPressOff(event),
              required: true,
            }}
          />
        </div>

        <div className="form-group">
          <label className="label-text" htmlFor="event-duration">Duration</label>
          <input
            id="event-duration"
            value={duration}
            name="duration"
            type="text"
            className="event-input"
            onChange={event => this.handleChanges(event)}
            required
          />
        </div>

        <input
          type="submit"
          value="Add"
          className="start-button"
        />

      </form>

    );
  }
}
