import React, { PropTypes } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';


class AddTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        // debugger;
        e.preventDefault();

        const inputText = this.refs.addTodoForm.elements.todoItemInput.value;

        if (inputText.length > 0) {
            this.refs.addTodoForm.elements.todoItemInput.value = '';
            this.props.onAddTodoItem(inputText);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} ref="addTodoForm">
                    <FormGroup controlId="todoItemInput" ref="todoItemInput">
                        <FormControl
                            type="text"
                            ref="itemText"
                            placeholder="Enter new task here..."
                        />
                    </FormGroup>
                    <Button bsSize="large" block onClick={this.onFormSubmit}>
                        Add Task
                    </Button>
                </form>
            </div>
        );
    }
}

AddTodoForm.propTypes = {
    onAddTodoItem: PropTypes.func.isRequired,
};

module.exports = AddTodoForm;
