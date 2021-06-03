import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemTocart(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalprice: newItem.price,
                    title: newItem.title
                })
            } else {
                existingItem.quantity++
                existingItem.totalprice = existingItem.totalprice + newItem.price
            }
        },
        removeItemFromCart(state, action) {
            const existingId = action.payload
            const existingItem = state.items.find(item => item.id === existingId)
            console.log(existingId)
            console.log(existingItem)
            state.totalQuantity--
            if (existingItem.quantity == 1) {
                state.items.filter(item => item.id === existingId)
            } else {
                existingItem.quantity--
                existingItem.totalprice = existingItem.totalprice - existingItem.price
            }

        }
    }
})

export const cartActions = CartSlice.actions
export default CartSlice