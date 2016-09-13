import React, { Component } from 'react';
import { MenuData } from '../components/Menu/MenuData.js';
import { Nav } from 'react-bootstrap/lib/Nav';
import MenuItem from '../components/Menu/MenuItem.jsx';

const item = new MenuData({title: "Second Base", active: true, enabled: true, counter: 120, icon: 'fa fa-lg fa-fw fa-home', path: '/menu'}, undefined );
const item2 = new MenuData({title: "Menu Test", active: false, enabled: true, icon: 'fa fa-lg fa-fw fa-gear', path: '/test'}, undefined )

const MenuSandbox = React.createClass({
    render() {
        return (
        	<aside id='sidebar-main' className={'sidebar'}>
        		<div class='sidebar-module'>
	        		<nav className='sidebar-nav-v2'>
		        		<ul>
				            <MenuItem item={item} />
				            <MenuItem item={item2} />
			            </ul>
			        </nav>
			    </div>
	        </aside>
        );
    },
});

module.exports = MenuSandbox;

/**
 *   TODO:   Build MenuList to contain a ul of menu items, the MenuList may be a child of a MenuItem
 *   			- take a store menu node as an input 
 *   		 Build SideBarMenu to hold a full hierarchy of dynamically created and maintained menu items
 *   		 	- attach store to the SideBarMenu to initiate and maintain its state
 *   		 	- when a new menu item is added it should appear in the menu dynamiccally
 *   		 	- when a counter is changed it should show up
 */
