import React from 'react';
import chai from 'chai';
import { mount } from 'enzyme';
import sinonChai from 'sinon-chai';

chai.should();
chai.use(sinonChai);

const TodoList = require('./TodoList.jsx');
const TodoItem = require('./TodoItem.jsx');

describe('TodoList', () => {
    it('should exist', () => {
        TodoList.should.exist;
    });

    it('should render one TodoItem component for each item in todos prop', () => {
        const todos = [{
            id: 1,
            text: 'Do something 1',
        }, {
            id: 2,
            text: 'Do something else',
        }];
        const wrapper = mount(<TodoList todos={todos} />);
        const todoComponents = wrapper.find(TodoItem);

        todoComponents.should.have.length(todos.length);
    });
});
