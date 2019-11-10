import React from 'react'

export default function ShoppingItem(props) {
    return (
        <li>
            <h2 style={{
                textDecoration: props.item.checked ? 'line-through' : null,
            }}>
                {props.item.name}
            </h2>
            <button 
            onClick={props.onCheckItem}
            type='button'>check</button>
            <buton 
            onClick={props.onDeleteItem}
            type='button'>delete</buton>
        </li>
    )
}

ShoppingItem.defaultProps = {
    item: {}
}