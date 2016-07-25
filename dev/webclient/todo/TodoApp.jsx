let React = require('react');
let TodoList = require('./TodoList.jsx');
let AddTodoForm = require('./AddTodo.jsx');

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog',
                },
                {
                    id: 2,
                    text: 'Clean the yard',
                },
            ],
            lastID: 2,
        };
        this.addTodoItem = this.addTodoItem.bind(this);
    }

    addTodoItem(textInput) {
        let todoList = this.state.todos.slice();
        const nextId = this.state.lastID + 1;
        const newTodo = { id: nextId, text: textInput };
        todoList.push(newTodo);
        this.setState({ todos: todoList, lastID: nextId });
    }

    render() {
        let { todos } = this.state;

        return (
            <div>
                <TodoList todos={todos} />
                <AddTodoForm onAddTodoItem={this.addTodoItem} />
            </div>
        );
    }

}

module.exports = TodoApp;
