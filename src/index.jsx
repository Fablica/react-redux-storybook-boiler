import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';

/** default css */
import './index.css';

/** helpers */
import history from './helpers/history';
import store from './helpers/store';
import * as serviceWorker from './helpers/serviceWorker';

/** components */
import App from './components/App/App';
import Hello from './components/Hello/Hello';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/hello" component={Hello} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
