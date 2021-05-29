import React from 'react';

import "./Burger.css";
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    //My way of transforming ingredients object to array
    const ingObjectNames = Object.keys(props.ingredients);
    const ingObjectValues = Object.values(props.ingredients);
    let transformedIngredients = [];
    for (var i = 0; i < ingObjectValues.length; i++) {
        for (var j = 0; j < ingObjectValues[i]; j++) {
            transformedIngredients.push(
                <BurgerIngredient 
                    key={ingObjectNames[i] + j} 
                    type={ingObjectNames[i]} 
                />
            );
        }
    }
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    //Tutorial way to transform stateful ingredients object from BurgerBuilder to an array 
    // const transformedIngredients = Object.keys(props.ingredients)
    //     .map(ingKey => {
    //         return [...Array(props.ingredients[ingKey])].map((_, i) => {
    //             return <BurgerIngredient key={ingKey + i} type={ingKey} />;
    //         } ); 
    //      } )
    //      .reduce((arr, el) => {
    //          return arr.concat(el)
    //      }, []);
    //  if (transformedIngredients.length === 0) {

    //  }
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;