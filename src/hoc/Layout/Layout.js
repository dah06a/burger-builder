import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Layout.css';
import Auxi from '../Auxi/Auxi';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
state = {
    showSideDrawer: false
}

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return(
            <Auxi>
                <Toolbar 
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler} 
                />
                <SideDrawer 
                    isAuth={this.props.isAuthenticated}
                    open ={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} 
                />
                <main className="Content">
                    {this.props.children}
                </main>
            </Auxi>
        )
    }
} 

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);