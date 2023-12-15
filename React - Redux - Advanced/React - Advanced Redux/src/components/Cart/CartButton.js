import classes from './CartButton.module.css';
import { toggle } from '../../store/uiSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const { totalQuantity } = useSelector(state => state.cart);

  const dispatch = useDispatch();

  function toggleCartHandler() {
    dispatch(toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
