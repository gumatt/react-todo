const React = require('react');
const ReactDOM = require('react-dom');
let { Route, Router, IndexRoute, hashHistory } = require('react-router');
const App = require('./app/App.jsx');
const Timer = require('./timer/Timer.jsx');
const Countdown = require('./countdown/Countdown.jsx');
const Weather = require('./weather/Weather.jsx');
const Todo = require('./todo/TodoApp.jsx');


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/timer" component={Timer} />
            <Route path="/countdown" component={Countdown} />
            <Route path="/weather" component={Weather} />
            <Route path="/todo" component={Todo} />
            <IndexRoute component={Weather} />
        </Route>

    </Router>,
	document.getElementById('app')
);
