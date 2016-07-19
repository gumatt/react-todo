var React = require('react');
var ReactDOM = require('react-dom');
var should = require('chai').should();
var {shallow, mount} = require('enzyme');
var TestUtils = require('react-addons-test-utils');
var sinon = require('sinon');
var sinonChai = require("sinon-chai");

chai.should();
chai.use(sinonChai);

var Countdown = require('./Countdown.jsx');

describe('Countdown', function() {
    it('should exist', function() {
        Countdown.should.exist;
    });

    describe('handleSetCountdown', () => {
        it('should set state to started and countdown', (done) => {
            var output = mount(<Countdown />);
            var countdown = output.get(0);
            countdown.handleSetCountdown(10);

            countdown.state.count.should.equal(10);
            countdown.state.countdownStatus.should.equal('started');

            setTimeout(() => {
                countdown.state.count.should.equal(9);
                done();
            }, 1001)
        });

        it('should stop when countdown reaches 0', (done) => {
            var output = mount(<Countdown />);
            var countdown = output.get(0);
            countdown.handleSetCountdown(1);

            setTimeout(() => {
                countdown.state.count.should.equal(0);
                done();
            }, 3001)
        });

        it('should pause coundown on paused status', (done) => {
            var output = mount(<Countdown />);
            var countdown = output.get(0);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');

            setTimeout(() => {
                countdown.state.count.should.equal(3);
                countdown.state.countdownStatus.should.equal('paused');
                done();
            }, 2001)
        });

        it('should stop coundown on stopped status', (done) => {
            var output = mount(<Countdown />);
            var countdown = output.get(0);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');

            setTimeout(() => {
                countdown.state.count.should.equal(0);
                countdown.state.countdownStatus.should.equal('stopped');
                done();
            }, 2001)
        });
    });
});
