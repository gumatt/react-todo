var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router')
var App = require('./app/App.jsx');
var Timer = require('./timer/Timer.jsx');
var Countdown = require('./countdown/Countdown.jsx');
var Weather = require('./weather/Weather.jsx');


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/timer" component={Timer}></Route>
            <Route path="/countdown" component={Countdown}></Route>
            <Route path="/weather" component={Weather}></Route>
            <IndexRoute component={Weather}></IndexRoute>
        </Route>

    </Router>,
	document.getElementById('app')
);
