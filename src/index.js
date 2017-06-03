import 'babel-polyfill';

import React 								from 'react';
import ReactDOM 							from 'react-dom';
import { Provider } 						from 'react-redux';
import { createStore, applyMiddleware } 	from 'redux';
import ReduxPromise 						from 'redux-promise';

import App 									from './components/app';
import reducers 							from './reducers';

import { Router, browserHistory } 			from 'react-router'
import { syncHistoryWithStore } 			from 'react-router-redux'

import configureStore 		from './store'
import route 								from './routes'
import { ConnectedRouter } from 'react-router-redux';

// const initialState = {}
// const store = configureStore(initialState, browserHistory)
// const history = syncHistoryWithStore(browserHistory, store)

// ReactDOM.render(
// 	<Provider store={store}>
// 		<ConnectedRouter history={history}>
// 			<App />
// 		</ConnectedRouter>
// 	</Provider>,
// 	document.querySelector('.container')
// );

// render(
//   <Provider store={store}>
//     <DevTools/>
//   </Provider>,
//   document.getElementById('devtools')
// );




const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.querySelector('.container'));
