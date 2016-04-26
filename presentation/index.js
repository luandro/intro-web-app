import React from "react";
import { Router, Route, Link, browserHistory } from 'react-router';
import MainIndex from './MainIndex';
import NotFound from './NotFound';
import Day1 from './day-1';
import Day2 from './day-2';
import Day3 from './day-3';
import Day4 from './day-4';
import Day5 from './day-5';


// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

export default class Presentation extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={MainIndex}/>
				<Route path="/dia-1" component={Day1}/>
				<Route path="/dia-2" component={Day2}/>
				<Route path="/dia-3" component={Day3}/>
				<Route path="/dia-4" component={Day4}/>
				<Route path="/dia-5" component={Day5}/>
				<Route path="*" component={NotFound}/>
			</Router>
		);
	}
}