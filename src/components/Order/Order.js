import React from 'react';
import classes from './Order.css'
import Button from '../UI/Button/Button'
// import Axios from 'axios';

const Order = (props) => {
    const ingredients = []

    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        )
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span
            className={classes.OrderText}
            key={ig.name}>{ig.name} ({ig.amount})</span>
    })

    // const orderDeleteHandler = () => {
    //     console.log("Delete")
    //     // Axios.delete("/orders/")
    //     //     .then(res => {
    //     //         console.log(res)
    //     //         console.log(res.data)
    //     // })
    // }

    // const orderEditHandler = () => {
    //     console.log("Edit")
    // }

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}$</strong></p>
            <Button btnType="Success"
                clicked={this.orderEditHandler}>EDIT</Button>
            <Button btnType="Danger"
                clicked={this.orderDeleteHandler}>DELETE</Button>
        </div>
    );
};

export default Order;