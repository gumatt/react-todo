import _ from 'lodash';
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import classNames from 'classnames';

export default class MenuItem extends React.Component {
    render() {
    	let linkClasses = classNames({
    		'menu-item': true,
    		'disabled': !this.props.item.enabled,
    		'page-arrow active-page': _.startsWith(location.hash.replace(/#/, ''), this.props.item.path)
    	});
        return (
			<LinkContainer to={this.props.item.path} className={linkClasses} >
				<NavItem eventKey={1}>
	        		<i className={this.props.item.icon} />
	        		{this.props.item.title}
	        		<span className={'menu-badge pull-right'}>{this.props.item.counter}</span>
				</NavItem>
			</LinkContainer>
        );
    }
}

/**
 * TODO:  don't hard code "menu-item" className; or append props classNames to this className
 * 		  or figure out how to allow for classnames to be prop'ed to the LI  
 */