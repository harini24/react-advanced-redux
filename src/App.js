import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { UiActions } from './store/ui-slice'
import { sendCartdata, fetchCartdata } from './store/cart-actions'

let isInitial = true
function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const notification = useSelector(state => state.ui.notification)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  // useEffect(() => {
  // const sendCartData = async () => {
  // dispatch(UiActions.showNotification({ status: 'pending', title: 'sending', message: 'sending cart data' }))

  // const response = await fetch('https://react-burger-builder-29b01-default-rtdb.firebaseio.com/cart.json', {
  //   method: 'PUT',
  //   body: JSON.stringify(cart),
  // })

  // if (!response.ok) {
  //   throw new Error('Sending cart data failed')
  // }

  // dispatch(UiActions.showNotification({ status: 'success', title: 'Success!...', message: 'sent cart data successfully' }))

  // }

  // if (isInitial) {
  //   isInitial = false
  //   return
  // }
  // sendCartData().catch((error) => {
  //   dispatch(UiActions.showNotification({ status: 'error', title: 'error!...', message: 'sent cart data failed' }))
  // })
  // }, [cart, dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }

    if (cart.changed) {
      dispatch(sendCartdata(cart))
    }
  }, [cart, dispatch])

  useEffect(() => {
    dispatch(fetchCartdata())
  }, [dispatch])

  return (
    <React.Fragment>
      {notification && <Notification status={notification.status} message={notification.message} title={notification.title} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>

  );
}

export default App;
