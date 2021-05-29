import React from 'react';

import './SideDrawer.css';
import Auxi from '../../../hoc/Auxi/Auxi';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = ( props ) => {

    let openOrClose = "SideDrawer Close";
    if (props.open) {
        openOrClose = "SideDrawer Open";
    }

    return(
        <Auxi>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={openOrClose} onClick={props.closed}>
                <Logo height="15%" marginBot = "32px" />
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
            </div>
        </Auxi>
        
    );
};

export default sideDrawer;