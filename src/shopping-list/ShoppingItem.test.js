import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import ShoppingItem from './ShoppingItem'

describe(`ShoppingItem component`, () => {
    it ('renders given no item', () => {
        const wrapper = shallow(<ShoppingItem />)
        expect (toJson(wrapper)).toMatchSnapshot()
    })

    it ('renders the item when supplied', () => {
        //adding props to the ShoppingItem for different test cases
        const testItem = {name: 'test-item', checked: false}
        const wrapper = shallow(<ShoppingItem item = {testItem} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it ('strikes through checked items', () => {
        const testItem = {name: 'checked-item', checked: true}
        const wrapper = shallow(<ShoppingItem item={testItem} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})

// The ShoppingList.test.js has a test for rendering multiple items 
// with names and either checked or unchecked.