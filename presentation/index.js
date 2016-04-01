import React from "react";
import { Router, Route, Link, browserHistory } from 'react-router';
import MainIndex from './MainIndex';
import NotFound from './NotFound';
import Day1 from './day-1';
import Day2 from './day-2';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

export default class Presentation extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={MainIndex}/>
				<Route path="/day-1" component={Day1}/>
				<Route path="/day-2" component={Day2}/>
				<Route path="/day-3" component={Day1}/>
				<Route path="*" component={NotFound}/>
			</Router>
		);
	}
}