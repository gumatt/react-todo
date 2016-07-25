var React = require('react');
var ReactDOM = require('react-dom');
var should = require('chai').should();
var {shallow, mount} = require('enzyme');
var TestUtils = require('react-addons-test-utils');
var sinon = require('sinon');
var sinonChai = require("sinon-chai");

chai.should();
chai.use(sinonChai);

var Timer = require('./Timer.jsx');

describe('Timer', function() {
    it('should exist', function() {
        Timer.should.exist;
    });

    describe('handleStatusChange', () => {
        it('should initialize properly', () => {
            var output = mount(<Timer />);
            output.children().length.should.equal(3);
            var timer = output.get(0);

            timer.state.count.should.equal(0);
            timer.state.timerStatus.should.equal('stopped');
        });

        it('should start when status started', (done) => {
            var output = mount(<Timer />);
            var timer = output.get(0);
            timer.handleStatusChange('started');

            timer.state.count.should.equal(0);
            timer.state.timerStatus.should.equal('started');

            setTimeout(() => {
                timer.state.count.should.equal(1);
                done();
            }, 1001);
        });

        xit('should pause when status is paused', (done) => {
            var output = mount(<Timer />);
            var timer = output.get(0);

            timer.setState({count: 10});
            timer.handleStatusChange('started');
            timer.handleStatusChange('paused');

            setTimeout(() => {
                timer.state.timerStatus.should.equal('paused');
                timer.state.count.should.equal(10);
                done();
            }, 3001);

        });

        it('should stop when status is stopped', () => {
            var output = mount(<Timer />);
            var timer = output.get(0);

            timer.setState({count: 10});
            timer.handleStatusChange('started');
            timer.handleStatusChange('stopped');

            timer.state.count.should.equal(0);
            timer.state.timerStatus.should.equal('stopped');
        });
    });

});
