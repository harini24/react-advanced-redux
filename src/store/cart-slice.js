import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        replacecart(state, action) {
            state.totalQuantity = action.payload.totalQuantity
            state.items = action.payload.items
        },
        addItemTocart(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            console.log(existingItem)
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
                console.log("add existing")
                existingItem.quantity++
                existingItem.totalprice = existingItem.totalprice + newItem.price
            }
            console.log(state.items)
        },
        removeItemFromCart(state, action) {
            const existingId = action.payload
            const existingItem = state.items.find(item => item.id === existingId)
            console.log(existingId)
            console.log(existingItem)
            state.totalQuantity--
            if (existingItem.quantity == 1) {
                console.log("remove existing 1")
                state.items = state.items.filter(item => item.id !== existingId)
            } else {
                console.log("remove existing")
                existingItem.quantity--
                existingItem.totalprice = existingItem.totalprice - existingItem.price
            }
            console.log(state.items)
        }
    }
})

export const cartActions = CartSlice.actions
export default CartSlice