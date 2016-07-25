import React from 'react';
import chai from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.should();
chai.use(sinonChai);

const AddTodoForm = require('./AddTodo.jsx');
import { FormControl } from 'react-bootstrap';

describe('AddTodoForm', () => {
    it('should exist', () => {
        AddTodoForm.should.exist;
    });

    it('Form test object should exist', () => {
        let spy = sinon.spy();
        const output = mount(<AddTodoForm onAddTodoItem={spy} ref="form" />);
        output.should.exist;
    });

    it('should call onSubmitHandler on valid input entered', () => {
        const addItemStub = sinon.spy();
        const output = mount(<AddTodoForm onAddTodoItem={addItemStub} ref="addTodoForm" />);
        const form = output.find('form');

        output.prop('onAddTodoItem').should.equal(addItemStub);
        output.find('input').simulate('change', { target: { value: 'test task' } });
        output.find('input').at(0).node.value = 'test task 2';
        output.ref('itemText').simulate('change', { target: { value: 'test task 3' } });
        // console.log('form value is' + output.find('input').at(0).node.value);
        output.find('form').simulate('submit');

        addItemStub.should.have.been.calledOnce;
        addItemStub.should.have.been.calledWith('test task 2');
    });
});
