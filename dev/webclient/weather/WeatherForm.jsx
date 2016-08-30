const React = require('react');
const FormGroup = require('react-bootstrap/lib/FormGroup');
const FormControl = require('react-bootstrap/lib/FormControl');
const Button = require('react-bootstrap/lib/Button');

class WeatherForm extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();

        const city = this.refs.form.elements.city.value;

        if (city.length > 0) {
            this.refs.form.city.value = '';
            this.props.onSearch(city);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} ref="form">
                    <FormGroup controlId="city">
                        <FormControl
                          type="text"
                          placeholder="Enter city name"
                        />
                    </FormGroup>
                    <Button bsSize="large" block onClick={this.onFormSubmit}>Get Weather</Button>
                </form>
            </div>
    );
    }

}

WeatherForm.propTypes = {
    onSearch: React.PropTypes.func.isRequired,
};


module.exports = WeatherForm;
