import React from 'react'

export default class AddItemForm extends React.Component {
    render() {
        // wire up form to add items in the app state
        return (
            <form>
                <input 
                type='text'
                placeholder='carrots'
                aria-label='Shopping list item'
                />
                <button type='submit'>Add item</button>
            </form>
        )
    }
}