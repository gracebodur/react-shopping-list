import React from 'react'
import './shoppingItem.css'

export default function ShoppingItem(props) {
    return (
        <li>
            <h2 style={{
                textDecoration: props.item.checked ? 'line-through' : null,
            }}>
                {props.item.name}
            </h2>
            <button
            onClick={() => props.onCheckItem(props.item)}
            type='button'>check</button>
            <buton 
            onClick={() => props.onDeleteItem(props.item)}
            type='button'>delete</buton>
        </li>
    )
}

ShoppingItem.defaultProps = {
    item: {}
}