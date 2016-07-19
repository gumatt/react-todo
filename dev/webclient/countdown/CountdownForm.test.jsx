var React = require('react');
var ReactDOM = require('react-dom');
var should = require('chai').should();
var {shallow, mount} = require('enzyme');
var TestUtils = require('react-addons-test-utils');
var sinon = require('sinon');
var sinonChai = require("sinon-chai");

chai.should();
chai.use(sinonChai);

var CountdownForm = require('./CountdownForm.jsx');

describe('CountdownForm', function() {
    it('CountdownForm should exist', function() {
        CountdownForm.should.exist;
    });

    it('CountdownForm test object should exist', function() {
        var spy = sinon.spy();
        var output = mount(<CountdownForm onSetCountdown={spy} ref="form"/>);
        output.should.exist;
    });

    it('should call onSubmitHandler on valid seconds entered', function() {
        var spy = sinon.spy();
        var output = mount(<CountdownForm onSetCountdown={spy} ref="form" key="cdForm"/>);
        var formField = output.find('#secondsInput').get(0);
        formField.should.exist;
        formField.value = '109';
        output.simulate('submit');

        spy.should.have.been.calledOnce;
        spy.should.have.been.calledWith(109);
    });

    it('should not call onSubmitHandler on invalid seconds entered', function() {
        var spy = sinon.spy();
        var output = mount(<CountdownForm onSetCountdown={spy} ref="form" key="cdForm"/>);
        var formField = output.find('#secondsInput').get(0);
        formField.should.exist;
        formField.value = 'abq';
        output.simulate('submit');

        spy.should.not.have.been.called;
    });
});
