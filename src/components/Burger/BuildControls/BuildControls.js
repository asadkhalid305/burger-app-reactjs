import React from 'react'
import classes from './BuildControls.css'
import BuildControls from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Your Order: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(cont => (
            <BuildControls
                key={cont.label}
                label={cont.label}
                added={() => props.ingredientAdded(cont.type)}
                removed={() => props.ingredientRemoved(cont.type)}
                disabled={props.disabled[cont.type]}
            />
        ))}

        <button
            className={classes.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
)

export default buildControls