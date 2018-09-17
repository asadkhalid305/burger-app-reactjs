import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../.././../components/UI/Input/Input'

class ContactData extends Component {
  state = {
    prderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          palceholder: 'Your Name'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          palceholder: 'Street'
        },
        value: ''
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          palceholder: 'Postal Code'
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          palceholder: 'Country'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          palceholder: 'Your E-Mail'
        },
        value: ''
      },
      orderType: {
        elementType: 'select',
        elementConfig: {
          option: [
            {
              value: 'fastest',
              displayValue: 'Fastest'
            },
            {
              value: 'cheapest',
              displayValue: 'Cheapest'
            }
          ]
        },
        value: ''
      },
    },

  }

  orderHandler = () => {
    this.setState({ loading: true })

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,

    }

    axios.post('/orders.json', order)
      .then(Response =>
        this.setState({ loading: false, }),
        this.props.history.push('/')
      )
      .catch(error =>
        this.setState({ loading: false, })
      )
  }

  render() {
    let form = (
      <form>
        <Input elementType={'...'} elementConfig={'...'} value='...' />
        <Input elementType={'...'} elementConfig={'...'} value='...' />
        <Input elementType={'...'} elementConfig={'...'} value='...' />
        <Input elementType={'...'} elementConfig={'...'} value='...' />
        <Button btnType="Success" clicked={this.orderHandler} >ORDER</Button>
      </form>
    )

    if (this.state.loading) {
      form = <Spinner />
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Details</h4>
        {form}
      </div>
    )
  }
}

export default ContactData