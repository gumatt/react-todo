var React = require('react');
var ReactDOM = require('react-dom');
var should = require('chai').should();
var {shallow} = require('enzyme');
var TestUtils = require('react-addons-test-utils');

var Clock = require('./Clock.jsx');

describe('Clock', function() {
    it('Clock should exist', function() {
        Clock.should.exist;
    });

    describe('formatSeconds', () => {
        it('should format for 615 seconds ', () => {
            var clock = TestUtils.renderIntoDocument(<Clock />);
            var seconds = 615;
            var expected = '10:15';
            var actual = clock.formatSeconds(seconds);
            actual.should.equal(expected);
        });
        it('should format for less than a minute', () => {
            var clock = TestUtils.renderIntoDocument(<Clock />);
            var seconds = 15;
            var expected = '00:15';
            var actual = clock.formatSeconds(seconds);
            actual.should.equal(expected);
        });
        it('should format for exactly a minute', () => {
            var clock = TestUtils.renderIntoDocument(<Clock />);
            var seconds = 60;
            var expected = '01:00';
            var actual = clock.formatSeconds(seconds);
            actual.should.equal(expected);
        });
        it('should format for zero time', () => {
            var clock = TestUtils.renderIntoDocument(<Clock />);
            var seconds = 0;
            var expected = '00:00';
            var actual = clock.formatSeconds(seconds);
            actual.should.equal(expected);
        });
    });

    describe('render', () => {
        it('should render clock to output', () => {
            var wrapper = shallow(<Clock totalSeconds={62} />)
            var displayText = wrapper.find('.clock-text').text();
            var expected = '01:02';
            displayText.should.equal(expected);
        });
    });
});
