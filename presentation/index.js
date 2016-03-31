import React from "react";
import { Router, Route, Link, browserHistory } from 'react-router';
import MainIndex from './MainIndex';
import NotFound from './NotFound';
import Week1 from './week-1';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

export default class Presentation extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={MainIndex}/>
				<Route path="/week-1" component={Week1}/>
				<Route path="/week-2" component={Week1}/>
				<Route path="/week-3" component={Week1}/>
				<Route path="*" component={NotFound}/>
			</Router>
		);
	}
}