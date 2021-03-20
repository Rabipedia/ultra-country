import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum, country) => sum + country.population, 0)
    return (
        <div>
            <h4>This is cart</h4>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;