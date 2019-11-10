import React from 'react';
import AddItemForm from './shopping-list/AddItemForm'
import ShoppingList from './shopping-list/ShoppingList'
import './App.css';

class App extends React.Component {
  state = {
    shoppingItems: [
      {name: 'apples', checked: false},
      {name: 'bananas', checked: true},
      {name: 'milk', checked: false},
    ]
  }
  handleDeleteItem() {
    console.log('handle delete item called')
  }
  handleCheckItem () {
    console.log('handle check item called')
  }

  render() {
    return (
      <>
      <header>
        <h1>Shopping List</h1>
      </header>
      <main>
        <section>
          <AddItemForm />
        </section>
        <section>
          <ShoppingList item={this.state.shoppingItems} 
          // add the two handledelete and handlecheck callbacks here
          onDeleteItem ={this.handleDeleteItem}
          onCheckItem={this.handleCheckItem}
          />
        </section>
      </main>
      </>
    )
  }
}

export default App

