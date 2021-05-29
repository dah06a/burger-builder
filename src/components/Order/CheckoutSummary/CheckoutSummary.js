import React from 'react'

import './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = ( props ) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes good!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <h3>Continue with this order?</h3>
            <Button 
                btnType='Danger'
                clicked={props.checkoutCanceled}
                >CANCEL
            </Button>
            <Button 
                btnType='Success'
                clicked={props.checkoutContinued}
                >CONTINUE
            </Button>
        </div>
    );
}

export default checkoutSummary;