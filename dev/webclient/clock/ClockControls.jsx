var React = require('react');
var {Button} = require('react-bootstrap');
var PropTypes = React.PropTypes;

var Controls = React.createClass({
    // propTypes : {
    //     countdownStatus : PropTypes.string.isRequired,
    //     onStatusChange : PropTypes.func.isRequired
    // },
    onStatusChange(newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    },
    render: function() {
        var {countdownStatus} = this.props;
        var renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <Button bsStyle="primary"
                               id="pause"
                               onClick={this.onStatusChange('paused')}>Pause</Button>
            } else if (['paused', 'stopped'].indexOf(countdownStatus) != -1) {
                return <Button bsStyle="success"
                               id="start"
                               onClick={this.onStatusChange('started')}>Start</Button>
            };
        }
        return (
            <div className="controls">
                {renderStartStopButton()}
                <Button bsStyle="danger" onClick={this.onStatusChange('stopped')}>Clear</Button>
            </div>

        );
    }

});

module.exports = Controls;
