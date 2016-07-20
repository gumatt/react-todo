var React = require('react');
var ReactDOM = require('react-dom');
var should = require('chai').should();
var {shallow, mount} = require('enzyme');
var TestUtils = require('react-addons-test-utils');
var sinon = require('sinon');
var sinonChai = require("sinon-chai");

chai.should();
chai.use(sinonChai);

var TodoList = require('./TodoList.jsx');
var TodoItem = require('./TodoItem.jsx');

describe('TodoList', function() {
    it('should exist', function() {
        TodoList.should.exist;
    });

    it('should render one TodoItem component for each item in todos prop', () => {
        var todos = [{
            id: 1,
            text: 'Do something 1'
        }, {
            id: 2,
            text: 'Do something else'
        }];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList,TodoItem);

        todoComponents.should.have.length(todos.length);
    });
});
