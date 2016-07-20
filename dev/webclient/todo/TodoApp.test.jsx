var React = require('react');
var ReactDOM = require('react-dom');
var should = require('chai').should();
var {shallow, mount} = require('enzyme');
var TestUtils = require('react-addons-test-utils');
var sinon = require('sinon');
var sinonChai = require("sinon-chai");

chai.should();
chai.use(sinonChai);

var Todo = require('./TodoApp.jsx');

describe('Todo', function() {
    it('should exist', function() {
        Todo.should.exist;
    });
});
