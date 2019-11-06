//import 'react-app-polyfill/ie11';
import 'raf-polyfill';
import 'core-js';
import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

// Styles
// Import Main styles for this application
import '../scss/style.scss';

// Containers
import Full from './containers/Full/';

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'; 

// Connections
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render((
	<Provider store={createStoreWithMiddleware(reducers)}>
	  <HashRouter>
	    <Switch>
	      <Route path="/" name="Home" component={Full}/>
	    </Switch>
	  </HashRouter>
  	</Provider>
), document.getElementById('root'));

