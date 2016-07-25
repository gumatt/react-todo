var React = require('react');
var ReactDOM = require('react-dom');
var should = require('chai').should();
var {mount} = require('enzyme');
var TestUtils = require('react-addons-test-utils');

var Controls = require('./ClockControls.jsx');

describe.skip('ClockControls', function() {
    it('Controls should exist', function() {
        Controls.should.exist;
    });

    describe('render', () => {
        it('should render two buttons', () => {
            var output = mount(<Controls countdownStatus="started" />);
            var button = output.find("button");
            button.length.should.equal(2);
        });

        it('should render pause when started', () => {
            var output = mount(<Controls countdownStatus="started" />);
            var pauseButton = output.find("#pause");
            pauseButton.length.should.equal(1);
            pauseButton.text().should.equal('Pause');
        });

        it('should render start when paused', () => {
            var output = mount(<Controls countdownStatus="paused" />);
            var startButton = output.find("#start");
            startButton.length.should.equal(1);
            startButton.text().should.equal('Start');
        });

    })
});
