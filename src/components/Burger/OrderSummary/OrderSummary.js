import React, { Component } from 'react'
import Aux from '../../../hoc/ReactAux';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    componentWillUpdate() {
        // console.log("Order summary is updating even when we are not showing it")
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}> {igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            )
        })

        return (
            <Aux>
                <h3>Your Order</h3>
                <p> <strong>Your delicious Burger has following ingredients are:</strong></p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p> <strong>Total Amount You Need to Pay: </strong> {this.props.totalPrice.toFixed(2)}$</p>
                <p>Proceed to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseProceed}>PROCEED</Button>
            </Aux>
        )
    }
}

export default OrderSummary