import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import ShoppingList from './ShoppingList'

describe(`ShoppingList component` , () => {
    it ('renders empty given no items', () => {
        const wrapper = shallow(<ShppingList />)
        expect (toJson(wrapper)).toMatchSnaphot()
    })

    it ('renders ShoppingItems when supplied with an items prop', () => {
        const testItems = [
            {name:'test item 1', checked: false },
            {name:'another test item', checked: true }, 
            {name:'test item number 3', checked: false }, 
        ]
        const wrapper = shallow(<ShoppingList = items={testitems} />)
        expect(toJson(wrapper)).toMatchSnaphot()
    })
})