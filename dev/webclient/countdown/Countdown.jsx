var React = require('react');
var Clock = require('../clock/Clock.jsx');
var CountdownForm = require('./CountdownForm.jsx');
var Controls = require('../clock/ClockControls.jsx');
var PropTypes = React.PropTypes;

var Countdown = React.createClass({
    getInitialState() {
        return {
            count : 0,
            countdownStatus : 'stopped'
        };
    },
    componentDidUpdate(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({ count: 0});
                case 'paused' :
                    this.clearTimer()
                    break;
            }
        }
    },
    componentWillUnmount() {
        this.clearTimer();
    },
    clearTimer() {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer() {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count : newCount >= 0 ? newCount : 0
            });

            if (newCount === 0) {
                this.setState({countdownStatus: 'stopped'});
            };
        }, 1000);
    },
    handleSetCountdown(seconds) {
        this.setState({
            count : seconds,
            countdownStatus : 'started'
        })
    },
    handleStatusChange(newStatus) {
        this.setState({
            countdownStatus : newStatus
        });
    },
    render: function() {
        var {count, countdownStatus} = this.state;
        var renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus}
                                 onStatusChange={this.handleStatusChange} />
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown} />
            }
        }

        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }

});

module.exports = Countdown;
