import 'babel-polyfill';

import React 								from 'react';
import ReactDOM 							from 'react-dom';
import { Provider } 						from 'react-redux';
import { createStore, applyMiddleware } 	from 'redux';
import ReduxPromise 						from 'redux-promise';
// import { Router, hashHistory } from 'react-router';
import { browserHistory} from 'react-router';
import App 									from './components/app';
import reducers 							from './reducers';
import { ConnectedRouter} from 'react-router-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// ReactDOM.render(
//     <Provider store={createStoreWithMiddleware(reducers)}>
//     	<App />
//     </Provider>
//     , document.querySelector('.container'));

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    	<BrowserRouter history={browserHistory}>
    		<App />
    	</BrowserRouter>
    </Provider>
    , document.querySelector('.container-fluid'));