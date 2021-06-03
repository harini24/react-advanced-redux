import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { UiActions } from '../../store/ui-slice'
const CartButton = (props) => {
  const dispatch = useDispatch()
  const totalcartItems = useSelector(state => state.cart.totalQuantity)
  const togglehandler = () => {
    dispatch(UiActions.toggleCart())
  }
  return (
    <button className={classes.button} onClick={togglehandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalcartItems}</span>
    </button>
  );
};

export default CartButton;
