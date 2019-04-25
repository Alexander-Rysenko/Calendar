import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Main } from '../partials/main';
import { Login } from './login';
import { CreateUser } from './createUser';


export const Pages = ({ user, setLoginState }) => {
  if (!user) {
    return (
      <Switch>
        <Route
          path="/login"
          render={() => <Login login={setLoginState} />}
        />
        <Route
          path="/user"
          render={({ history }) => (
            <CreateUser
              user={user}
              setLoginState={setLoginState}
              history={history}
            />
          )}
        />
        <Redirect to="/login" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/home" exact component={Main} />
      <Redirect from="/login" to="/" />
    </Switch>
  );
};
