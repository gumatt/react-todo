import React from 'react';
import chai from 'chai';
import { mount } from 'enzyme';
import sinonChai from 'sinon-chai';

chai.should();
chai.use(sinonChai);

const TodoItem = require('./TodoItem.jsx');

describe('TodoItem', () => {
    it('should exist', () => {
        TodoItem.should.exist;
    });

    it('should display todo item text', () => {
        const todo = {
            id: 3,
            text: 'Luke, I am your father',
        };
        const wrapper = mount(<TodoItem id={todo.id} text={todo.text} />);
        wrapper.prop('id').should.equal(todo.id);
        wrapper.prop('text').should.equal(todo.text);
        wrapper.text().should.equal('3. Luke, I am your father');
    })
});
