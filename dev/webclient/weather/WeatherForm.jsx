var React = require('react');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var FormControl = require('react-bootstrap/lib/FormControl');
var Button = require('react-bootstrap/lib/Button');

var WeatherForm = React.createClass({
    getInitialState: function() {
        return {
            location: '',
            name: ''
        };
    },
    handleLocationChange: function(e) {

        this.setState({ location: e.target.value });
    },
    handleNameChange: function(e) {
        this.setState({ name: e.target.value });
    },
    onFormSubmit: function (e) {
        e.preventDefault();

        var city = this.state.location;

        if (city.length > 0) {
            this.state.location = '';
            this.props.onSearch(city);
        }
    },

    render: function() {
        var title = this.props.title;
        var location = this.state.location;
        var name = this.state.name;
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <FormGroup controlId="cityInput">
                        <FormControl type="text" value={location}
                                     onChange={this.handleLocationChange}
                                     placeholder="Enter city name" ref="city" />
                    </FormGroup>
                    <Button bsSize="large" block onClick={this.onFormSubmit}>Get Weather</Button>
                </form>
            </div>
        );
    }

});

module.exports = WeatherForm;
