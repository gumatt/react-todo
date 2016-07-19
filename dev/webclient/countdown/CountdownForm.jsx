var React = require('react');
var {Button, FormGroup, FormControl} = require('react-bootstrap');
var PropTypes = React.PropTypes;

var CountdownForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var strSeconds = this.refs.form.elements.secondsInput.value;

        if (strSeconds.match(/^-?\d+$/)) {
            this.refs.form.elements.secondsInput.value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    },

    render: function() {
        return (
            <form className="countdown-form" onSubmit={this.onFormSubmit} ref="form">
                <FormGroup controlId="secondsInput" ref="secondsInput">
                    <FormControl type="text"
                                 ref="seconds"
                                 placeholder="Enter time in seconds" />
                </FormGroup>
                <Button bsSize="large" block onClick={this.onFormSubmit}>Start</Button>
            </form>
        );
    }

});

module.exports = CountdownForm;
