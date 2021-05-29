import React from 'react';

import './Order.css';

const order = (props) => {
    const transformedIngredients = [];

    for (let ingredientName in props.ingredients) {
        transformedIngredients.push({
            name: ingredientName, 
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientOutput = transformedIngredients.map(ingr => {
        return <span 
            style={{
                textTransform: 'capitalize',
                display: 'inlineblock',
                margin: '0 8px',
                padding: '5px',
                border: '1px solid #ccc'
            }}
            key={ingr.name}>{ingr.name} ({ingr.amount}) </span>
    });

    return (
        <div className="Order">
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    );  
}

export default order;