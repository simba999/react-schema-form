import React, {Component} 	from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/home';

export default class App extends Component {
    render() {
        return (
            <Switch>
            	<Route path="/" component={Home} />
            </Switch>
        );
    }
}
