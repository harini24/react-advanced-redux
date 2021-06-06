
import { cartActions } from './cart-slice'
import { UiActions } from './ui-slice'

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
        } catch (error) {
            dispatch(UiActions.showNotification({ status: 'error', title: 'error!...', message: 'sent cart data failed' }))
        }
    }
}

export const fetchCartdata = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-burger-builder-29b01-default-rtdb.firebaseio.com/cart.json')

            if (!response.ok) {
                throw new Error('could not fetch cart data')
            }

            const data = await response.json()
            return data
        }

        try {
            const cartData = await fetchData()
            dispatch(cartActions.replacecart(cartData))
        } catch (error) {
            dispatch(UiActions.showNotification({ status: 'error', title: 'error!...', message: 'Fetching cart data failed' }))
        }
    }
}