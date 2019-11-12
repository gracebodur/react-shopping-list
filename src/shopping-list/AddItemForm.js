import React from 'react'
import './addItemForm.css'

export default class AddItemForm extends React.Component {
    onSubmitForm = (e) => {
        e.preventDefault()
        this.props.onAddItem(e.target.itemToAdd.value)
    }
    render() {
        // TODO: wire up form to add items in the app state
        return (
            <form onSubmit={this.onSubmitForm}>
                <input
                name='itemToAdd'
                type='text'
                placeholder='carrots'
                aria-label='Shopping list item'
                />
                <button type='submit'>Add item</button>
            </form>
        )
    }
}