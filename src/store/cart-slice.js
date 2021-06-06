import { createSlice } from "@reduxjs/toolkit";
import { UiActions } from './ui-slice'
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

export const sendCartdata = (cart) => {
    return async (dispatch) => {
        dispatch(UiActions.showNotification({ status: 'pending', title: 'sending', message: 'sending cart data' }))

        const sendReq = async () => {
            const response = await fetch('https://react-burger-builder-29b01-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart),
            })

            if (!response.ok) {
                throw new Error('Sending cart data failed')
            }
        }

        try {
            await sendReq()
            dispatch(UiActions.showNotification({ status: 'success', title: 'Success!...', message: 'sent cart data successfully' }))
        } catch {
            dispatch(UiActions.showNotification({ status: 'error', title: 'error!...', message: 'sent cart data failed' }))
        }
    }
}
export const cartActions = CartSlice.actions
export default CartSlice