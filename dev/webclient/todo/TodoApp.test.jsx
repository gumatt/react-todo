import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import sinonChai from 'sinon-chai';

chai.should();
chai.use(sinonChai);

const Todo = require('./TodoApp.jsx');
const TodoList = require('./TodoList.jsx');

describe('Todo', () => {
    it('Todo App should exist', () => {
        Todo.should.exist;
    });

    it('should render a TodoList Component', () => {
        const wrapper = shallow(<Todo />);
        wrapper.containsAllMatchingElements([
            <TodoList />,
        ]).should.equal(true);
    });
});
