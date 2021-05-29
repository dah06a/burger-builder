import React from 'react';

import './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = ( props ) => (
    <div className="Logo" style={{height: props.height, marginBottom: props.marginBot, marginRight: "10px"}}>
        <img src={burgerLogo} alt="Burger Logo" />
    </div>
);

export default logo;