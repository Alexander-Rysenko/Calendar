import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { AddEvent } from '../../components/AddEvent';
import { Calendar } from '../../components/Calendar';

import { setUser } from '../../store';
import { update } from '../../services/userService';

import './main.scss';

export class MainComponent extends PureComponent {
  modify = (events) => {
    update(events)
      .then(this.props.setUser(events));
  };

  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        <h1 className="main-title">
          {['Hello ', user.firstName]}
        </h1>
        {
          user
          && (
            <div>
              <AddEvent addEvents={this.modify} user={user} />
              <Calendar remove={this.modify} user={user} />
            </div>
          )
        }

      </React.Fragment>
    );
  }
}


const mapState = ({ user }) => ({
  user,
});

const mapDispatch = {
  setUser,
};

export const Main = connect(mapState, mapDispatch)(MainComponent);
