import React, { PureComponent } from 'react';
import { createBrowserHistory } from 'history';

import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppComp } from './app.component';
import { store } from './store';


const hist = createBrowserHistory();

class App extends PureComponent {
  state = { };

  render() {
    return (
      <Provider store={store}>
        <Router history={hist}>
          <AppComp />
        </Router>
      </Provider>
    );
  }
}

export default App;
