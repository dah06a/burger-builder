import React from 'react';

import './Toolbar.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = ( props ) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}>MENU</DrawerToggle>
        <Logo height="80%" />
        <nav className="DesktopOnly">
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default toolbar;