const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');
const App = require('./app/App.jsx');
const Timer = require('./timer/Timer.jsx');
const Countdown = require('./countdown/Countdown.jsx');
const Weather = require('./weather/Weather.jsx');
const Todo = require('./todo/TodoApp.jsx');
const MenuSandbox = require('./pages/MenuSandbox.jsx');


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/timer" component={Timer} />
            <Route path="/countdown" component={Countdown} />
            <Route path="/weather" component={Weather} />
            <Route path="/todo" component={Todo} />
            <Route path="/menu" component={MenuSandbox} />
            <Route path="/test" component={MenuSandbox} />
            <IndexRoute component={Weather} />
        </Route>

    </Router>,
	document.getElementById('app')
);
