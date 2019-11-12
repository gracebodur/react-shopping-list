import React from 'react';
import AddItemForm from './shopping-list/AddItemForm'
import ShoppingList from './shopping-list/ShoppingList'
import './App.css';

class App extends React.Component {
  state = {
    shoppingItems: [
      //put stub items for testing
      {name: 'apples', checked: false},
      {name: 'bananas', checked: true},
      {name: 'milk', checked: false},
    ]
  }
  newItemsToState(newItems) {
    this.setState({
      shoppingItems: newItems
    })
  }
  //event handler methods for the callback props
  handleDeleteItem = (item) => {
    console.log('handles delete item called', {item})
    const newItems = this.state.shoppingItems.filter(item => item !== item)
    this.setState({
      shoppingItems: newItems
    })
  }
  handleCheckItem = (item) => {
    console.log('handle check item called', {item})
    const newItems = this.state.shoppingItems.map(item => {
      if(item === item) {
        item.checked = !item.checked
      }
      return item
    })
    this.setState({
      shoppingItems: newItems
    })
  }
  handleAddItem = (itemName) => {
    console.log('handle add item', {itemName})
    const newItems = [
      ...this.state.shoppingItems,
      {name: itemName, checked: false}
    ]
    this.setState({
      shoppingItems: newItems
    })
  }
  render() {
    return (
      <>
      <div className='container'>
      <header>
        <h1>Shopping List</h1>
      </header>
      <main>
        <section>
          <AddItemForm 
          onAddItem ={this.handleAddItem} />
        </section>
        <section>
          <ShoppingList 
          items={this.state.shoppingItems} 
          // add the callback props handleDelete and handleCheck callbacks here
          onDeleteItem ={this.handleDeleteItem}
          onCheckItem={this.handleCheckItem}
          />
        </section>
      </main>
      </div>
      </>
    )
  }
}

export default App

