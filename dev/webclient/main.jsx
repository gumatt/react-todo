let React = require('react');
const ReactDOM = require('react-dom');
let { Route, Router, IndexRoute, hashHistory } = require('react-router');
let App = require('./app/App.jsx');
let Timer = require('./timer/Timer.jsx');
let Countdown = require('./countdown/Countdown.jsx');
let Weather = require('./weather/Weather.jsx');
let Todo = require('./todo/TodoApp.jsx');


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
